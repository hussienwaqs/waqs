import { FileText, AlertTriangle, Scale, Users, Clock, Shield, Gavel } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto py-8">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Gavel className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">شروط الاستخدام</h1>
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
            مرحباً بك في موقع محول MP4 إلى MP3. باستخدامك لهذا الموقع، فأنت توافق على الالتزام بشروط الاستخدام هذه. إذا كنت لا توافق على أي من هذه الشروط، يرجى التوقف عن استخدام الموقع فوراً.
          </p>
        </section>

        {/* Service Description */}
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Shield className="w-5 h-5 text-indigo-600" />
            وصف الخدمة
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            موقعنا يوفر أداة مجانية لتحويل ملفات الفيديو بصيغة MP4 إلى ملفات صوتية بصيغة MP3. تستخدم الخدمة تقنية المحول المحلي (Client-side) مما يعني أن جميع العمليات تتم على جهازك دون رفع الملفات إلى خوادمنا.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <p className="text-blue-800 text-sm">
              <strong>ملاحظة:</strong> الخدمة مجانية للاستخدام الشخصي. لا يتطلب التسجيل أو تقديم أي معلومات شخصية.
            </p>
          </div>
        </section>

        {/* Acceptable Use */}
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Scale className="w-5 h-5 text-indigo-600" />
            الاستخدام المقبول
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            يُسمح لك باستخدام موقعنا للأغراض التالية:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-gray-600">
              <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
              تحويل ملفاتك الشخصية أو الملفات التي تملك حقوق استخدامها
            </li>
            <li className="flex items-start gap-3 text-gray-600">
              <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
              إنشاء محتوى لأغراض تعليمية أو بحثية
            </li>
            <li className="flex items-start gap-3 text-gray-600">
              <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
              الاستخدام الشخصي غير التجاري
            </li>
          </ul>
        </section>

        {/* Prohibited Use */}
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-red-500" />
            الاستخدام المحظور
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            يُحظر استخدام الموقع في الأغراض التالية:
          </p>
          <div className="space-y-3">
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
              <p className="text-red-700 text-sm">
                <strong>المحتوى المخالف:</strong> تحويل ملفات تحتوي على محتوى محمي بحقوق الطبع والنشر دون إذن صاحب الحقوق.
              </p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
              <p className="text-red-700 text-sm">
                <strong>الاستخدام التجاري:</strong> استخدام الموقع لخدمات تجارية أو إعادة بيع النتائج.
              </p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
              <p className="text-red-700 text-sm">
                <strong>الأنشطة غير المشروعة:</strong> استخدام الموقع لأي غرض غير قانوني أو مخالف للأخلاق.
              </p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
              <p className="text-red-700 text-sm">
                <strong>إلحاق الضرر:</strong> محاولة إتلاف أو تعطيل أو التدخل في عمل الموقع.
              </p>
            </div>
          </div>
        </section>

        {/* Intellectual Property */}
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-4">الملكية الفكرية</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            الموقع وكل المحتوى الموجود فيه (بما في ذلك النصوص والتصاميم والشعارات والرمز) هي ملكية لمشغل الموقع ومحمية بموجب قوانين الملكية الفكرية.
          </p>
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
            <p className="text-purple-800 text-sm">
              <strong>مسؤوليتك:</strong> أنت مسؤول عن التأكد من أن لديك الحقوق اللازمة لتحويل أي ملف قبل استخدامه مع خدماتنا.
            </p>
          </div>
        </section>

        {/* Limitation of Liability */}
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-4">تحديد المسؤولية</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            يتم توفير الموقع "كما هو" و"كما هو متاح". لا نقدم أي ضمانات بشأن دقة أو موثوقية أو اكتمال المعلومات.
          </p>
          <div className="bg-gray-50 rounded-xl p-4">
            <p className="text-gray-700 text-sm">
              <strong>تنصل:</strong> لن نكون مسؤولين عن أي أضرار مباشرة أو غير مباشرة أو عرضية أو تبعية تنشأ عن استخدام أو عدم القدرة على استخدام الموقع، بما في ذلك على سبيل المثال لا الحصر، فقدان البيانات أو الأرباح أو السمعة.
            </p>
          </div>
        </section>

        {/* User Responsibilities */}
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Users className="w-5 h-5 text-indigo-600" />
            مسؤولياتك
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            باستخدامك للموقع، أنت توافق على:
          </p>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 text-gray-600">
              <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
              استخدام الموقع بشكل قانوني وأخلاقي
            </li>
            <li className="flex items-center gap-2 text-gray-600">
              <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
              عدم محاولة الوصول غير المصرح به إلى الأنظمة
            </li>
            <li className="flex items-center gap-2 text-gray-600">
              <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
              عدم تحميل أي فيروسات أو أكواد ضارة
            </li>
            <li className="flex items-center gap-2 text-gray-600">
              <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
              التأكد من امتلاكك لحقوق الاستخدام قبل التحويل
            </li>
          </ul>
        </section>

        {/* Changes to Service */}
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5 text-indigo-600" />
            التعديلات على الخدمة
          </h2>
          <p className="text-gray-600 leading-relaxed">
            نحتفظ بالحق في تعديل أو إيقاف أو تحديث الموقع أو أي جزء منه في أي وقت دون إشعار مسبق. كما نحتفظ بالحق في تعديل شروط الاستخدام هذه، وسوف نقوم بنشر التغييرات على هذه الصفحة.
          </p>
        </section>

        {/* Governing Law */}
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-4">القانون الحاكم</h2>
          <p className="text-gray-600 leading-relaxed">
            تخضع شروط الاستخدام هذه للقوانين السارية في بلد مشغل الموقع. أي نزاعات تنشأ عن استخدام الموقع ستُحل وفقاً للإجراءات القانونية المعمول بها.
          </p>
        </section>

        {/* Contact */}
        <section className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-3">التواصل معنا</h2>
          <p className="text-gray-600">
            إذا كانت لديك أي أسئلة أو استفسارات حول شروط الاستخدام هذه، يرجى التواصل معنا.
          </p>
        </section>

        {/* Last Update */}
        <div className="text-center text-sm text-gray-500 pt-4 border-t border-gray-200">
          <p>آخر تحديث لهذه الصفحة: يناير 2024</p>
        </div>
      </div>
    </div>
  );
}