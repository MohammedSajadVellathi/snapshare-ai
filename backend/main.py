from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import sqlite3
from datetime import datetime

app = FastAPI(title="SnapShare Demo API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

conn = sqlite3.connect("demo_emails.db", check_same_thread=False)
cursor = conn.cursor()

cursor.execute("""
CREATE TABLE IF NOT EXISTS demo_emails (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE,
    created_at TEXT
)
""")
conn.commit()

class DemoEmail(BaseModel):
    email: str

@app.post("/demo")
def create_demo_email(data: DemoEmail):
    try:
        cursor.execute(
            "INSERT INTO demo_emails (email, created_at) VALUES (?, ?)",
            (data.email, datetime.utcnow().isoformat())
        )
        conn.commit()
        return {"message": "Email stored successfully"}
    except sqlite3.IntegrityError:
        return {"error": "Email already exists"}
