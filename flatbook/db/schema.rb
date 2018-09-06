# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_08_30_144634) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comment_likes", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "comment_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["comment_id"], name: "index_comment_likes_on_comment_id"
    t.index ["user_id"], name: "index_comment_likes_on_user_id"
  end

  create_table "comments", force: :cascade do |t|
    t.string "body"
    t.bigint "review_id"
    t.bigint "user_id"
    t.date "date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["review_id"], name: "index_comments_on_review_id"
    t.index ["user_id"], name: "index_comments_on_user_id"
  end

  create_table "project_likes", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "project_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["project_id"], name: "index_project_likes_on_project_id"
    t.index ["user_id"], name: "index_project_likes_on_user_id"
  end

  create_table "projects", force: :cascade do |t|
    t.string "name"
    t.string "category"
    t.string "description"
    t.date "date"
    t.string "github"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "review_likes", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "review_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["review_id"], name: "index_review_likes_on_review_id"
    t.index ["user_id"], name: "index_review_likes_on_user_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.string "body"
    t.string "title"
    t.string "category"
    t.string "sub_category"
    t.bigint "user_id"
    t.date "date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_reviews_on_user_id"
  end

  create_table "user_projects", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "project_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["project_id"], name: "index_user_projects_on_project_id"
    t.index ["user_id"], name: "index_user_projects_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.date "birth_date"
    t.string "hometown"
    t.string "story"
    t.string "fun_fact"
    t.string "occupation"
    t.string "pictures"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "username"
    t.string "password_digest"
  end

  add_foreign_key "comment_likes", "comments"
  add_foreign_key "comment_likes", "users"
  add_foreign_key "comments", "reviews"
  add_foreign_key "comments", "users"
  add_foreign_key "project_likes", "projects"
  add_foreign_key "project_likes", "users"
  add_foreign_key "review_likes", "reviews"
  add_foreign_key "review_likes", "users"
  add_foreign_key "reviews", "users"
  add_foreign_key "user_projects", "projects"
  add_foreign_key "user_projects", "users"
end
