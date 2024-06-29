DROP TABLE IF EXISTS "public"."books";
-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS books_id_seq;

-- Table Definition
CREATE TABLE "public"."books" (
    "id" int4 NOT NULL DEFAULT nextval('books_id_seq'::regclass),
    "title" varchar,
    "author" varchar,
    "amount" int4,
    "category" varchar,
    "created_at" timestamp DEFAULT now(),
    "updated_at" time DEFAULT now(),
    PRIMARY KEY ("id")
);

INSERT INTO "public"."books" ("id", "title", "author", "amount", "category", "created_at", "updated_at") VALUES
(1, 'Gelap', 'Penulis Buku', 3, '1', '2024-06-29 18:45:36.099865', '18:45:36.099865');
INSERT INTO "public"."books" ("id", "title", "author", "amount", "category", "created_at", "updated_at") VALUES
(2, 'Terang', 'Penulis Bu', 2, '2', '2024-06-29 18:45:36.099865', '18:45:36.099865');
INSERT INTO "public"."books" ("id", "title", "author", "amount", "category", "created_at", "updated_at") VALUES
(3, 'Redup', 'Randall', 20, '3', '2024-06-29 21:20:02.657109', '21:20:02.657109'),
(4, 'Redup', 'Randall', 20, '4', '2024-06-29 21:20:36.55424', '21:20:36.55424'),
(6, 'Redup', 'Randall', 20, '6', '2024-06-29 21:26:11.41934', '21:26:11.41934'),
(5, 'Terang', 'Wyzer', 20, '4', '2024-06-29 21:20:51.811566', '21:48:56.725634');