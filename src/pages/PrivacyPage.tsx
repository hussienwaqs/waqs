import { Shield, Lock, Eye, FileText, Clock, Users, Database } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto py-8">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Shield className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">سياسة الخصوصية</h1>
        <p className="text-gray-600">آخر تحديث: يناير 2024</p>
      </div>

      {/* Content */}
      <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
        {/* Introduction */}
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-indigo-600" />
            مقدمة
          </h2>
          <p className="text-gray-600 leading-relaxed">
            نحن في محول MP4 إلى MP3 نقدر خصوصيتك ونلتزم بحماية بياناتك الشخصية. هذه السياسة توضح كيفية جمعنا واستخدامنا وحماية المعلومات التي نحصل عليها منك عند استخدام موقعنا.
          </p>
        </section>

        {/* What We Collect */}
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Database className="w-5 h-5 text-indigo-600" />
            ما هي المعلومات التي نجمعها؟
          </h2>
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-xl p-4">
              <h3 className="font-semibold text-gray-800 mb-2">المعلومات التقنية</h3>
              <p className="text-gray-600 text-sm">
                نحصل على معلومات تقنية تلقائية مثل نوع المتصفح، نظام التشغيل، عنوان IP، وصفحات الويب التي تزورها. هذه المعلومات تساعدنا في تحسين خدماتنا.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <h3 className="font-semibold text-gray-800 mb-2">ملفاتك</h3>
              <p className="text-gray-600 text-sm">
                <strong>ملاحظة مهمة:</strong> جميع عمليات التحويل تتم محلياً على جهازك باستخدام تقنية المحول المحلي (Client-side). نحن لا نرفع ملفاتك إلى أي خادم. ملفك يبقى على جهازك طوال عملية التحويل.
              </p>
            </div>
          </div>
        </section>

        {/* How We Use */}
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5 text-indigo-600" />
            كيف نستخدم معلوماتك؟
          </h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-gray-600">
              <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></span>
              لتحسين تجربة المستخدم وأداء الموقع
            </li>
            <li className="flex items-start gap-3 text-gray-600">
              <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></span>
              لتقديم الدعم الفني وحل المشكلات
            </li>
            <li className="flex items-start gap-3 text-gray-600">
              <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></span>
              لتحليل استخدام الموقع وتطوير خدمات جديدة
            </li>
            <li className="flex items-start gap-3 text-gray-600">
              <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></span>
              لعرض إعلانات مخصصة عبر شركائنا الإعلانيين
            </li>
          </ul>
        </section>

        {/* Cookies */}
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Lock className="w-5 h-5 text-indigo-600" />
            ملفات تعريف الارتباط (Cookies)
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            نستخدم ملفات تعريف الارتباط لتحسين تجربتك. هذه الملفات الصغيرة تُخزن على جهازك وتسمح لنا بتذكر تفضيلاتك وإعداداتك.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-xl p-4">
              <h4 className="font-semibold text-green-800 mb-2">ملفات ضرورية</h4>
              <p className="text-green-700 text-sm">أساسية لعمل الموقع بشكل صحيح</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <h4 className="font-semibold text-blue-800 mb-2">ملفات تحليل</h4>
              <p className="text-blue-700 text-sm">لمعرفة كيف يستخدم الزوار الموقع</p>
            </div>
          </div>
        </section>

        {/* Third Parties */}
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Users className="w-5 h-5 text-indigo-600" />
            الطرف الثالث
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            قد نستخدم خدمات طرف ثالث مثل Google Analytics لتحليل حركة المرور، و Google AdSense لعرض الإعلانات. هذه الخدمات قد تجمع معلومات عن زياراتك.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p className="text-amber-800 text-sm">
              <strong>إعلانات Google:</strong> قد نستخدم ملفات تعريف الارتباط للإعلانات بناءً على زياراتك السابقة للموقع. يمكنك إلغاء الاشتراك في إعلانات Google من خلال إعدادات الإعلانات.
            </p>
          </div>
        </section>

        {/* Data Security */}
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Lock className="w-5 h-5 text-indigo-600" />
            أمان البيانات
          </h2>
          <p className="text-gray-600 leading-relaxed">
            نتخذ إجراءات أمانية مناسبة لحماية معلوماتك. بما أن ملفاتك تُعالج محلياً على جهازك، فإنها لا تنتقل عبر الإنترنت، مما يوفر مستوى عالٍ من الأمان.
          </p>
        </section>

        {/* Your Rights */}
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Eye className="w-5 h-5 text-indigo-600" />
            حقوقك
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            لديك الحق في:
          </p>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 text-gray-600">
              <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
              معرفة البيانات التي نحتفظ بها عنك
            </li>
            <li className="flex items-center gap-2 text-gray-600">
              <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
              طلب حذف بياناتك
            </li>
            <li className="flex items-center gap-2 text-gray-600">
              <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
              إلغاء الاشتراك في ملفات تعريف الارتباط
            </li>
          </ul>
        </section>

        {/* Contact */}
        <section className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-3">تواصل معنا</h2>
          <p className="text-gray-600">
            إذا كان لديك أي استفسار حول سياسة الخصوصية هذه، لا تتردد في التواصل معنا عبر صفحة الاتصال.
          </p>
        </section>

        {/* Changes */}
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-4">التعديلات على السياسة</h2>
          <p className="text-gray-600 leading-relaxed">
            قد نقوم بتحديث هذه السياسة من وقت لآخر. سنقوم بإشعارك بأي تغييرات جوهرية عبر نشر الإصدار الجديد على هذه الصفحة مع تحديث تاريخ "آخر تحديث".
          </p>
        </section>
      </div>
    </div>
  );
}