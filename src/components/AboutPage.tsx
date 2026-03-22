export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f7f9fc] py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Section */}
        <div className="bg-white rounded-3xl shadow-sm border border-navy-100 overflow-hidden mb-10 animate-fade-in">
          {/* Cover */}
          <div className="bg-navy-900 h-44 relative">
            <div className="absolute inset-0 opacity-[0.05]">
              <div className="absolute top-5 right-10 text-6xl font-bold text-white">∫</div>
              <div className="absolute bottom-8 left-16 text-5xl font-bold text-white">∑</div>
              <div className="absolute top-10 left-1/3 text-4xl font-bold text-white">π</div>
              <div className="absolute bottom-5 right-1/3 text-4xl font-bold text-white">√</div>
            </div>
            {/* Accent stripe */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent-400"></div>
          </div>

          <div className="px-6 md:px-10 pb-8 -mt-16 relative">
            {/* Professional Avatar Placeholder */}
            <div className="w-32 h-32 rounded-2xl border-4 border-white shadow-xl mb-4 bg-navy-100 overflow-hidden flex items-center justify-center relative">
              {/* Simple professional avatar silhouette */}
              <svg viewBox="0 0 120 120" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <rect width="120" height="120" fill="#d9e2ec"/>
                {/* Head */}
                <circle cx="60" cy="42" r="22" fill="#829ab1"/>
                {/* Body / Shoulders with formal shirt collar hint */}
                <ellipse cx="60" cy="110" rx="45" ry="40" fill="#627d98"/>
                {/* Collar left */}
                <polygon points="48,78 60,95 40,95" fill="#d9e2ec"/>
                {/* Collar right */}
                <polygon points="72,78 60,95 80,95" fill="#d9e2ec"/>
                {/* Tie */}
                <polygon points="57,88 63,88 62,108 58,108" fill="#f59e42"/>
              </svg>
              {/* Upload hint overlay */}
              <div className="absolute inset-0 bg-navy-900/0 hover:bg-navy-900/40 transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100 cursor-pointer rounded-2xl">
                <span className="text-white text-xs font-semibold bg-navy-800/80 px-3 py-1.5 rounded-lg">تغيير الصورة</span>
              </div>
            </div>

            <h1 className="text-2xl md:text-3xl font-black text-navy-900 mb-1" style={{ fontFamily: "Inter, Cairo, sans-serif" }}>
              Mr.Adham Serag
            </h1>
            <p className="text-accent-500 font-semibold mb-5 text-sm">Math Teacher</p>

            {/* Bio - Natural & Convincing */}
            <div className="bg-navy-50 rounded-2xl p-5 md:p-6 mb-6 border border-navy-100">
              <p className="text-navy-700 leading-[1.9] text-[15px]">
                الـ Math مادة بتحتاج مدرس <strong className="text-navy-900">منظّم</strong> يفهم عقلية الطالب ويعرف يوصّله المعلومة بشكل مرتّب.
                هنا بنبسّط المنهج ونرتّب الأفكار خطوة بخطوة — مش بنحشي الطالب معلومات، لكن بنبني معاه
                فهم حقيقي يخلّيه يقدر يحل أي سؤال بثقة.
              </p>
              <p className="text-navy-700 leading-[1.9] text-[15px] mt-3">
                هدفنا إننا نوفّر <strong className="text-navy-900">بيئة تعليمية</strong> تريّح الطالب وتطمئن ولي الأمر — لأن لما الطالب يحس إن المادة
                متنظمة ومفهومة، بيبدأ يحبّها ويبدع فيها. لو بتدوّر على حد يمسك ابنك صح في الـ Math، إنت في المكان الصح.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a href="#" className="inline-flex items-center gap-2 px-5 py-2.5 bg-navy-900 hover:bg-navy-800 text-white font-semibold rounded-xl transition-all shadow-md text-sm">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                فيسبوك
              </a>
              <a href="#" className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition-all shadow-md text-sm">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                يوتيوب
              </a>
              <a href="#" className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-all shadow-md text-sm">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                واتساب
              </a>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <FeatureCard
            icon="📐"
            title="شرح منظّم ومرتّب"
            description="كل درس مرتّب بتسلسل واضح يخلّي الطالب يفهم الفكرة من أول مرة بدون تعقيد"
          />
          <FeatureCard
            icon="✍️"
            title="تمارين وأمثلة محلولة"
            description="كل درس معاه أمثلة متنوعة محلولة خطوة بخطوة عشان الطالب يتعود على طريقة الحل"
          />
          <FeatureCard
            icon="📊"
            title="نتائج ملموسة"
            description="طلابنا بيحققوا تحسّن واضح في درجاتهم لأن الأساس بيتبني صح من البداية"
          />
        </div>

        {/* Why Mr.Adham */}
        <div className="bg-white rounded-2xl shadow-sm border border-navy-100 p-6 md:p-8 animate-fade-in">
          <h2 className="text-2xl font-black text-navy-900 mb-8 text-center">ليه تختار Mr.Adham؟</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <ReasonItem
              number="01"
              title="فاهم عقلية الطالب"
              description="بعرف الطالب بيقف فين وبيتلخبط في إيه، وبساعده يعدّي النقطة دي بسهولة"
            />
            <ReasonItem
              number="02"
              title="منهج مرتّب ومتدرّج"
              description="بنمشي من السهل للصعب، وكل معلومة جديدة بتتبني على اللي قبلها"
            />
            <ReasonItem
              number="03"
              title="متابعة مستمرة"
              description="مش بس شرح وخلاص — في متابعة وتمارين تضمن إن الطالب فاهم فعلاً"
            />
            <ReasonItem
              number="04"
              title="بيئة تعليمية مريحة"
              description="الطالب بيتعلم أحسن لما يحس بالراحة والثقة — وده اللي بنوفره هنا"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-navy-100 p-6 text-center hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-fade-in">
      <div className="w-14 h-14 bg-navy-50 rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">
        {icon}
      </div>
      <h3 className="text-base font-bold text-navy-900 mb-2">{title}</h3>
      <p className="text-navy-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

function ReasonItem({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="flex gap-4 p-4 rounded-xl hover:bg-navy-50 transition-colors">
      <div className="w-12 h-12 bg-accent-50 border border-accent-200 rounded-xl flex items-center justify-center text-accent-500 font-black text-lg shrink-0">
        {number}
      </div>
      <div>
        <h4 className="font-bold text-navy-900 mb-1">{title}</h4>
        <p className="text-navy-400 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
