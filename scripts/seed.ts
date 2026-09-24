// Database seed script for hospital - شفای نوین
// Run: bun run scripts/seed.ts
import { db } from "../src/lib/db";
import { DEPARTMENTS, DOCTORS, FAQS, PACKAGES, FACILITIES, NEWS } from "../src/lib/hospital-data";

async function main() {
  console.log("🌱 Seeding database...");

  // Site settings
  await db.siteSettings.upsert({
    where: { id: "default" },
    update: {},
    create: {
      id: "default",
      hospitalName: "بیمارستان تخصصی شفای نوین",
      tagline: "مراقبت جامع، اعتماد همیشگی",
      phone: "۰۲۱-۲۲۳۴۵۶۷۸",
      emergencyPhone: "۰۲۱-۱۹۰",
      address: "تهران، خیابان ولیعصر، بالاتر از پارک‌وی، پلاک ۲۴۵",
      email: "info@shafanovin.ir",
      workingHours: "اورژانس: ۲۴ ساعته | پذیرش: ۶ تا ۲۴",
      latitude: "35.7575",
      longitude: "51.4100",
    },
  });

  // Departments
  for (const dept of DEPARTMENTS) {
    await db.department.upsert({
      where: { slug: dept.slug },
      update: {
        name: dept.name,
        description: dept.description,
        icon: dept.icon,
        features: JSON.stringify(dept.features),
      },
      create: {
        slug: dept.slug,
        name: dept.name,
        description: dept.description,
        icon: dept.icon,
        features: JSON.stringify(dept.features),
      },
    });
  }

  // Doctors
  for (const doc of DOCTORS) {
    const department = await db.department.findUnique({ where: { slug: doc.department } });
    await db.doctor.upsert({
      where: { slug: doc.slug },
      update: {
        name: doc.name,
        title: doc.title,
        specialty: doc.specialty,
        bio: doc.bio,
        education: JSON.stringify(doc.education),
        experience: doc.experience,
        rating: doc.rating,
        available: doc.available,
        departmentId: department?.id,
      },
      create: {
        slug: doc.slug,
        name: doc.name,
        title: doc.title,
        specialty: doc.specialty,
        bio: doc.bio,
        education: JSON.stringify(doc.education),
        experience: doc.experience,
        rating: doc.rating,
        available: doc.available,
        departmentId: department?.id,
      },
    });
  }

  // News
  for (const article of NEWS) {
    await db.newsArticle.upsert({
      where: { slug: article.slug },
      update: {},
      create: {
        slug: article.slug,
        title: article.title,
        excerpt: article.excerpt,
        content: article.content || article.excerpt,
        category: article.category,
        author: article.author,
        published: true,
        featured: article.featured,
      },
    });
  }

  // Services / Packages
  for (const pkg of PACKAGES) {
    await db.medicalService.upsert({
      where: { slug: pkg.slug },
      update: {},
      create: {
        slug: pkg.slug,
        title: pkg.title,
        description: pkg.description,
        price: pkg.price,
        duration: pkg.duration,
        features: JSON.stringify(pkg.features),
        category: pkg.category,
        popular: pkg.popular,
      },
    });
  }

  // Facilities
  for (const fac of FACILITIES) {
    await db.facility.upsert({
      where: { slug: fac.slug },
      update: {},
      create: {
        slug: fac.slug,
        name: fac.name,
        description: fac.description,
        icon: fac.icon,
      },
    });
  }

  // FAQs - delete existing first
  await db.faqItem.deleteMany({});
  for (let i = 0; i < FAQS.length; i++) {
    const faq = FAQS[i];
    await db.faqItem.create({
      data: {
        question: faq.question,
        answer: faq.answer,
        category: faq.category,
        order: i,
      },
    });
  }

  console.log("✅ Database seeded successfully!");
  console.log(`   - Departments: ${DEPARTMENTS.length}`);
  console.log(`   - Doctors: ${DOCTORS.length}`);
  console.log(`   - News: ${NEWS.length}`);
  console.log(`   - Services: ${PACKAGES.length}`);
  console.log(`   - Facilities: ${FACILITIES.length}`);
  console.log(`   - FAQs: ${FAQS.length}`);
}

main()
  .catch((e) => {
    console.error("❌ Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
