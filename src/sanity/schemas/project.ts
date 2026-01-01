import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Projeler',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Proje Adı',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL Kısa Adı (Slug)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'status',
      title: 'Proje Durumu',
      type: 'string',
      options: {
        list: [
          { title: 'Tamamlanan Projeler', value: 'tamamlanan' },
          { title: 'Devam Eden Projeler', value: 'devam-eden' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Kapak Görseli',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Proje Açıklaması',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'location',
      title: 'Konum',
      type: 'string',
    }),
    // Detaylı Özellikler
    defineField({
      name: 'constructionArea',
      title: 'İnşaat Alanı (m2)',
      type: 'string',
      description: 'Örn: 15.000 m²',
    }),
    defineField({
      name: 'startDate',
      title: 'Başlangıç Tarihi',
      type: 'date',
    }),
    defineField({
      name: 'endDate',
      title: 'Bitiş Tarihi',
      type: 'date',
    }),
    defineField({
      name: 'blockCount',
      title: 'Blok Sayısı',
      type: 'number',
    }),
    defineField({
      name: 'unitCount',
      title: 'Bağımsız Bölüm Sayısı',
      type: 'number',
    }),
    defineField({
      name: 'gallery',
      title: 'Proje Görselleri',
      type: 'array',
      of: [{ type: 'image' }],
    }),
  ],
})
