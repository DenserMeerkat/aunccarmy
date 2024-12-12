import {
  integer,
  jsonb,
  pgTable,
  serial,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

export const reportsTable = pgTable("reports", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  date: timestamp("date"),
  location: text("location"),
  thumb: text("thumb").notNull(),
  images: jsonb("images").array().notNull().default([]),
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
