import {pgTable, serial, text, timestamp, integer } from "drizzle-orm/pg-core";

//migration file is generated bcz this code is written in js so convert into sql code
export const favoritesTable= pgTable("favorites",{
  id: serial("id").primaryKey(),
  userId: text("user_id").notNull(),
  recipeId: integer("recipe_id").notNull(),
  title: text("title").notNull(),
  image: text("image"),
  cookTime: text("cook_time"),
  servings: text("servings"),
  createdAt: timestamp("created_at").defaultNow(),
})