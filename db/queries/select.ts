"use server";

import { asc, count, desc, eq } from "drizzle-orm";
import { db } from "../index";
import {
  SelectAno,
  SelectReport,
  SelectSlide,
  anoTable,
  carouselTable,
  reportsTable,
} from "../schema";

export type ReportMeta = Partial<SelectReport>;

export async function getReports(): Promise<ReportMeta[]> {
  return db
    .select({
      id: reportsTable.id,
      title: reportsTable.title,
      date: reportsTable.date,
      location: reportsTable.location,
      thumb: reportsTable.thumb,
    })
    .from(reportsTable)
    .orderBy(desc(reportsTable.date));
}

export async function getReportBySlug(
  slug: string,
): Promise<Array<SelectReport>> {
  return db.select().from(reportsTable).where(eq(reportsTable.slug, slug));
}

export async function getSlugs(): Promise<Array<string>> {
  let items = await db.select({ slug: reportsTable.slug }).from(reportsTable);
  return items.map((slug) => slug.slug);
}

export async function getCarouselRowCount(): Promise<number> {
  const res = await db.select({ count: count() }).from(carouselTable);
  return res[0]?.count ?? 1;
}

export async function getCarousel(): Promise<SelectSlide[]> {
  return db.select().from(carouselTable).orderBy(asc(carouselTable.order));
}

export async function getAnos(): Promise<SelectAno[]> {
  return db.select().from(anoTable).orderBy(asc(anoTable.end_date));
}
