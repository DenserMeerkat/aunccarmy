import { sql } from "drizzle-orm";
import {
  boolean,
  integer,
  jsonb,
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
} from "drizzle-orm/pg-core";

export const reportsTable = pgTable("reports", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  date: timestamp("date"),
  location: text("location"),
  thumb: text("thumb"),
  images: jsonb("images").array().notNull().default([]),
  authors: jsonb("authors").array().notNull().default([]),
  slug: text("slug").unique().notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .$onUpdate(() => new Date()),
});

export type SelectReport = typeof reportsTable.$inferSelect;

export const carouselTable = pgTable("carousel", {
  id: serial("id").primaryKey(),
  public_id: text("public_id").notNull(),
  alt: text("alt").default(""),
  caption: text("caption").default(""),
  order: integer("order").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .$onUpdate(() => new Date()),
});

export type SelectSlide = typeof carouselTable.$inferSelect;

export const anoTable = pgTable(
  "ano",
  {
    id: serial("id").primaryKey(),
    public_id: text("public_id"),
    alt: text("alt").default(""),
    name: text("name").notNull(),
    platoon: text("platoon").notNull(),
    start_date: timestamp("start_date"),
    end_date: timestamp("end_date"),
    email: text("email"),
    phone: text("phone"),
    desig: text("desig").notNull(),
    dept: text("dept").notNull(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at")
      .notNull()
      .$onUpdate(() => new Date()),
  },
  (anoTable) => ({
    uniqueActivePlatoon: uniqueIndex("unique_active_ano_per_platoon")
      .on(anoTable.platoon)
      .where(sql`${anoTable.end_date} IS NULL`),
  }),
);

export type SelectAno = typeof anoTable.$inferSelect;

export const cadetTable = pgTable("cadet", {
  id: serial("id").primaryKey(),
  reg_no: text("reg_no").notNull().default(""),
  public_id: text("public_id"),
  alt: text("alt").default(""),
  name: text("name").notNull(),
  platoon: text("platoon").notNull(),
  desig: text("desig").notNull(),
  dept: text("dept").notNull(),
  start_date: timestamp("start_date"),
  end_date: timestamp("end_date").notNull(),
  rank: text("rank").notNull(),
  a_cert: boolean("a_cert").notNull(),
  c_cert: boolean("c_cert").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .$onUpdate(() => new Date()),
});

export type SelectCadet = typeof cadetTable.$inferSelect;

export const posterTable = pgTable("poster", {
  id: serial("id").primaryKey(),
  name: text("name").default(""),
  public_id: text("public_id").notNull(),
  alt: text("alt").default(""),
  date: timestamp("date"),
  description: text("description").default(""),
  instagram: text("instagram").default(""),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .$onUpdate(() => new Date()),
});

export type SelectPoster = typeof posterTable.$inferSelect;

export const galleryTable = pgTable("gallery", {
  id: serial("id").primaryKey(),
  public_id: text("public_id").notNull(),
  alt: text("alt").default(""),
  caption: text("caption").default(""),
  date: timestamp("date").notNull().defaultNow(),
  height: integer("height").notNull(),
  width: integer("width").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .$onUpdate(() => new Date()),
});

export type SelectGalleryImage = typeof galleryTable.$inferSelect;
