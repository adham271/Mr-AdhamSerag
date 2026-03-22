import React, { useState } from 'react';
import { Youtube, Plus, CheckCircle, AlertCircle } from 'lucide-react';

import { Video } from '../types';

interface UploadFormProps {
  onUpload?: (video: Video) => void;
}

export default function UploadForm({ onUpload }: UploadFormProps) {
  const [youtubeLink, setYoutubeLink] = useState('');
  const [youtubeId, setYoutubeId] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [grade, setGrade] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  // Extract YouTube ID when the link changes
  const handleLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const url = e.target.value;
    setYoutubeLink(url);
    
    // Regex to match YouTube ID
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?]+)/);
    if (match && match[1].length === 11) {
      setYoutubeId(match[1]);
      setError('');
    } else {
      setYoutubeId('');
      if (url.length > 5) {
        setError('رابط يوتيوب غير صحيح، يرجى التأكد من الرابط.');
      } else {
        setError('');
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!youtubeId) {
      setError('يرجى إدخال رابط يوتيوب صحيح أولاً.');
      return;
    }
    
    setIsSubmitting(true);

    // محاكاة حفظ البيانات في قاعدة البيانات
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      
      if (onUpload) {
        onUpload({
          id: Date.now().toString(),
          title: title || 'بدون عنوان',
          description: description || '',
          youtubeId: youtubeId,
          categoryId: category || 'algebra',
          grade: grade || 'prep1',
          duration: '00:00', // سيتم تحديثه لاحقاً
          views: 0,
          createdAt: new Date().toISOString()
        } as any);
      }
      
      // إعادة تعيين النموذج بعد 3 ثوانٍ
      setTimeout(() => {
        setSuccess(false);
        setYoutubeLink('');
        setYoutubeId('');
        setTitle('');
        setDescription('');
        setCategory('');
        setGrade('');
      }, 3000);
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="bg-white rounded-2xl shadow-sm border border-navy-100 overflow-hidden">
        {/* Header */}
        <div className="bg-navy-900 px-8 py-6 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 flex items-center justify-center">
            <Youtube className="w-48 h-48" />
          </div>
          <div className="relative z-10">
            <h1 className="text-3xl font-bold mb-2">إضافة درس جديد</h1>
            <p className="text-navy-100">قم بلصق رابط يوتيوب (Unlisted) وسيتم إضافة الدرس فوراً</p>
          </div>
        </div>

        {/* Form */}
        <div className="p-8">
          {success ? (
            <div className="bg-green-50 text-green-700 border border-green-200 p-8 rounded-xl flex flex-col items-center justify-center animate-fade-in text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold mb-2">تمت إضافة الدرس بنجاح!</h3>
              <p className="text-green-600">أصبح الدرس متاحاً للطلاب الآن على المنصة.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* YouTube Link Field */}
              <div className="bg-navy-50/50 p-6 rounded-xl border border-navy-100 relative">
                <label className="block text-navy-800 font-bold mb-3 flex items-center gap-2">
                  <Youtube className="w-5 h-5 text-red-500" />
                  رابط فيديو يوتيوب
                </label>
                <input
                  type="url"
                  required
                  value={youtubeLink}
                  onChange={handleLinkChange}
                  dir="ltr"
                  placeholder="https://www.youtube.com/watch?v=..."
                  className="w-full bg-white border border-navy-200 rounded-xl px-4 py-3 text-navy-900 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all text-left"
                />
                {error && (
                  <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" /> {error}
                  </p>
                )}

                {/* Thumbnail Preview */}
                {youtubeId && (
                  <div className="mt-4 rounded-xl overflow-hidden border border-navy-200 bg-black aspect-video relative shadow-sm max-w-sm animate-fade-in">
                    <img 
                      src={`https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`} 
                      alt="Thumbnail Preview"
                      onError={(e) => {
                        // Fallback to lower quality if maxres doesn't exist
                        (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
                      }}
                      className="w-full h-full object-cover opacity-90"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/90 rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                         <Youtube className="w-6 h-6 text-red-600" />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Title & Category */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-navy-700 font-bold mb-2">عنوان الدرس</label>
                  <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="مثال: مراجعة هندسة - الجزء الأول"
                    className="w-full bg-white border border-navy-200 rounded-xl px-4 py-3 text-navy-900 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-navy-700 font-bold mb-2">القسم</label>
                  <select
                    required
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full bg-white border border-navy-200 rounded-xl px-4 py-3 text-navy-900 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all appearance-none cursor-pointer"
                  >
                    <option value="" disabled>اختر القسم...</option>
                    <option value="algebra">Algebra</option>
                    <option value="geometry">Geometry</option>
                    <option value="calculus">Calculus</option>
                    <option value="statistics">Statistics</option>
                    <option value="trigonometry">Trigonometry</option>
                    <option value="arithmetic">Arithmetic</option>
                  </select>
                </div>
              </div>

              {/* Grade */}
              <div>
                <label className="block text-navy-700 font-bold mb-2">المرحلة الدراسية</label>
                <select
                  required
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                  className="w-full bg-white border border-navy-200 rounded-xl px-4 py-3 text-navy-900 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all appearance-none cursor-pointer"
                >
                  <option value="" disabled>اختر المرحلة الدراسية...</option>
                  <option value="prep1">Prep 1</option>
                  <option value="prep2">Prep 2</option>
                  <option value="prep3">Prep 3</option>
                  <option value="sec1">Sec 1</option>
                  <option value="sec2">Sec 2</option>
                  <option value="sec3">Sec 3</option>
                </select>
              </div>

              {/* Description */}
              <div>
                <label className="block text-navy-700 font-bold mb-2">وصف الدرس والتفاصيل</label>
                <textarea
                  required
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="اكتب وصفاً مختصراً للدرس وأهم النقاط التي يغطيها..."
                  className="w-full bg-white border border-navy-200 rounded-xl px-4 py-3 text-navy-900 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all resize-y"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || !youtubeId}
                className={`w-full py-4 rounded-xl text-white font-bold text-lg flex items-center justify-center gap-2 transition-all ${
                  isSubmitting || !youtubeId
                    ? "bg-navy-300 cursor-not-allowed"
                    : "bg-accent-500 hover:bg-accent-600 shadow-lg hover:shadow-accent-500/30 hover:-translate-y-0.5"
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin w-5 h-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    جاري الإضافة...
                  </span>
                ) : (
                  <>
                    <Plus className="w-6 h-6" />
                    إضافة الدرس
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
