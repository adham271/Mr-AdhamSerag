export interface Video {
  id: string;
  title: string;
  description: string;
  category: string;
  grade: string;
  thumbnailUrl?: string; // أصبحت اختيارية لسحب الصورة التلقائية
  youtubeId: string; // معرف يوتيوب بدلاً من رابط الملف المحلي
  duration: string;
  views: number;
  date: string;
  isFeatured?: boolean;
}

export type Category = {
  id: string;
  name: string;
  icon: string;
  count: number;
};

export type Grade = {
  id: string;
  name: string;
};
