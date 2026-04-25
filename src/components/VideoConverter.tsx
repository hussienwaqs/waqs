import { useState, useRef, useCallback } from 'react';
import { Upload, FileAudio, Download, Loader2, Check, X } from 'lucide-react';
import { FFmpeg } from '@ffmpeg/ffmpeg';
import { fetchFile, toBlobURL } from '@ffmpeg/util';

type ConversionStatus = 'idle' | 'loading' | 'converting' | 'done' | 'error';

export default function VideoConverter() {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<ConversionStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const ffmpegRef = useRef<FFmpeg | null>(null);
  const isDragging = useState(false);

  const handleDragEnter = useCallback(() => {
    (isDragging as any)[1](true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    (isDragging as any)[1](false);
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
  }, []);

  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    (isDragging as any)[1](false);

    const droppedFiles = e.dataTransfer.files;
    if (droppedFiles.length > 0) {
      const selectedFile = droppedFiles[0];
      if (selectedFile.type === 'video/mp4' || selectedFile.name.endsWith('.mp4')) {
        setFile(selectedFile);
        setStatus('idle');
        setDownloadUrl(null);
        setErrorMessage('');
      } else {
        setErrorMessage('يرجى اختيار ملف MP4 فقط');
        setStatus('error');
      }
    }
  }, []);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.type === 'video/mp4' || selectedFile.name.endsWith('.mp4')) {
        setFile(selectedFile);
        setStatus('idle');
        setDownloadUrl(null);
        setErrorMessage('');
      } else {
        setErrorMessage('يرجى اختيار ملف MP4 فقط');
        setStatus('error');
      }
    }
  };

  const convertToMP3 = async () => {
    if (!file) return;

    try {
      setStatus('loading');
      setProgress(10);

      const ffmpeg = new FFmpeg();
      ffmpegRef.current = ffmpeg;

      ffmpeg.on('progress', ({ progress: p }) => {
        setProgress(Math.round(p * 50) + 40);
      });

      const baseURL = 'https://unpkg.com/@ffmpeg/core@0.12.6/dist/esm';
      await ffmpeg.load({
        coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, 'text/javascript'),
        wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, 'application/wasm'),
      });

      setStatus('converting');
      setProgress(40);

      const inputFileName = 'input.mp4';
      const outputFileName = 'output.mp3';

      await ffmpeg.writeFile(inputFileName, await fetchFile(file));

      setProgress(50);

      await ffmpeg.exec([
        '-i', inputFileName,
        '-vn',
        '-ab', '192',
        '-ar', '44100',
        '-y',
        outputFileName
      ]);

      setProgress(80);

      const data = await ffmpeg.readFile(outputFileName);
      const blob = new Blob([data], { type: 'audio/mpeg' });
      const url = URL.createObjectURL(blob);

      setDownloadUrl(url);
      setProgress(100);
      setStatus('done');

      await ffmpeg.deleteFile(inputFileName);
      await ffmpeg.deleteFile(outputFileName);

    } catch (error: any) {
      console.error('Conversion error:', error);
      setStatus('error');
      setErrorMessage(error.message || 'حدث خطأ أثناء التحويل');
    }
  };

  const downloadFile = () => {
    if (downloadUrl && file) {
      const a = document.createElement('a');
      a.href = downloadUrl;
      a.download = file.name.replace('.mp4', '.mp3');
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  const resetConverter = () => {
    if (downloadUrl) {
      URL.revokeObjectURL(downloadUrl);
    }
    setFile(null);
    setStatus('idle');
    setProgress(0);
    setDownloadUrl(null);
    setErrorMessage('');
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* AdSense Placeholder - Top */}
      <div className="bg-gray-100 rounded-lg p-4 mb-8 text-center border-2 border-dashed border-gray-300">
        <p className="text-gray-500 text-sm">مساحة إعلانية</p>
      </div>

      {/* Hero Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-l from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
          محول MP4 إلى MP3
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          حوّل ملفات الفيديو MP4 إلى صوتيات MP3 بجودة عالية. مجاني 100% ولا يحتاج تثبيت برامج.
        </p>
      </div>

      {/* Upload Area */}
      {!file && status !== 'done' && (
        <div
          className={`border-3 border-dashed rounded-2xl p-12 text-center cursor-pointer transition-all duration-300 ${
            isDragging[0]
              ? 'border-indigo-500 bg-indigo-50 scale-105'
              : 'border-gray-300 bg-white hover:border-indigo-400 hover:bg-gray-50'
          }`}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={onDrop}
        >
          <label className="cursor-pointer">
            <div className="flex flex-col items-center gap-4">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
                <Upload className="w-10 h-10 text-white" />
              </div>
              <div>
                <p className="text-xl font-semibold text-gray-700 mb-2">
                  {isDragging[0] ? 'أفلت الملف هنا' : 'اسحب ملف MP4 هنا'}
                </p>
                <p className="text-gray-500">أو انقر للاختيار من جهازك</p>
                <p className="text-sm text-gray-400 mt-2">الحد الأقصى: 500 ميجابايت</p>
              </div>
            </div>
            <input
              type="file"
              accept="video/mp4,.mp4"
              onChange={handleFileSelect}
              className="hidden"
            />
          </label>
        </div>
      )}

      {/* Error Message */}
      {status === 'error' && errorMessage && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 mt-6 flex items-center gap-3">
          <X className="w-5 h-5 text-red-500 flex-shrink-0" />
          <p className="text-red-700">{errorMessage}</p>
        </div>
      )}

      {/* File Selected */}
      {file && status !== 'done' && (
        <div className="bg-white rounded-2xl shadow-lg p-6 mt-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
              <FileAudio className="w-7 h-7 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-gray-800 truncate">{file.name}</p>
              <p className="text-sm text-gray-500">{formatFileSize(file.size)}</p>
            </div>
            <button
              onClick={resetConverter}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              title="إزالة الملف"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          {/* Progress Bar */}
          {(status === 'loading' || status === 'converting') && (
            <div className="mb-6">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>{status === 'loading' ? 'جاري تحميل المحول...' : 'جاري التحويل...'}</span>
                <span>{progress}%</span>
              </div>
              <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-l from-indigo-500 to-purple-500 transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}

          {/* Convert Button */}
          <button
            onClick={convertToMP3}
            disabled={status === 'loading' || status === 'converting'}
            className="w-full py-4 bg-gradient-to-l from-indigo-600 to-purple-600 text-white font-bold text-lg rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
          >
            {status === 'loading' || status === 'converting' ? (
              <>
                <Loader2 className="w-6 h-6 animate-spin" />
                جاري التحويل...
              </>
            ) : (
              <>
                <FileAudio className="w-6 h-6" />
                تحويل إلى MP3
              </>
            )}
          </button>
        </div>
      )}

      {/* Success State */}
      {status === 'done' && downloadUrl && (
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-8 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">تم التحويل بنجاح!</h3>
          <p className="text-gray-600 mb-6">ملفك MP3 جاهز للتحميل</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={downloadFile}
              className="px-8 py-4 bg-gradient-to-l from-green-500 to-emerald-600 text-white font-bold text-lg rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
            >
              <Download className="w-6 h-6" />
              تحميل MP3
            </button>
            <button
              onClick={resetConverter}
              className="px-8 py-4 bg-white text-gray-700 font-bold text-lg rounded-xl hover:bg-gray-50 transition-all duration-300 border-2 border-gray-200"
            >
              تحويل ملف آخر
            </button>
          </div>
        </div>
      )}

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
          <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="font-bold text-gray-800 mb-2">سريع ومجاني</h3>
          <p className="text-gray-600 text-sm">تحويل فوري بدون رسوم أو قيود</p>
        </div>
        <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 className="font-bold text-gray-800 mb-2">آمن ومخصوص</h3>
          <p className="text-gray-600 text-sm">ملفاتك تُعالج محلياً ولا تُرسل للخوادم</p>
        </div>
        <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
          <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </div>
          <h3 className="font-bold text-gray-800 mb-2">جودة عالية</h3>
          <p className="text-gray-600 text-sm">حفاظ على جودة الصوت الأصلية</p>
        </div>
      </div>

      {/* AdSense Placeholder - Bottom */}
      <div className="bg-gray-100 rounded-lg p-4 mt-10 text-center border-2 border-dashed border-gray-300">
        <p className="text-gray-500 text-sm">مساحة إعلانية</p>
      </div>

      {/* How it works */}
      <div className="mt-12 bg-gradient-to-br from-gray-50 to-indigo-50 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">كيف يعمل المحول؟</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">1</div>
            <h3 className="font-semibold text-gray-800 mb-2">اختر الملف</h3>
            <p className="text-gray-600 text-sm">ارفع ملف MP4 من جهازك</p>
          </div>
          <div className="text-center">
            <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">2</div>
            <h3 className="font-semibold text-gray-800 mb-2">بدء التحويل</h3>
            <p className="text-gray-600 text-sm">اضغط زر التحويل وانتظر</p>
          </div>
          <div className="text-center">
            <div className="w-10 h-10 bg-pink-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">3</div>
            <h3 className="font-semibold text-gray-800 mb-2">تحميل النتيجة</h3>
            <p className="text-gray-600 text-sm">حمّل ملف MP3 جاهز للاستخدام</p>
          </div>
        </div>
      </div>
    </div>
  );
}