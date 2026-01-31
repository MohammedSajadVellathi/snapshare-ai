from sqlalchemy import Column, Integer, String, DateTime
from datetime import datetime
from database import Base

class DemoEmail(Base):
    __tablename__ = "demo_emails"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True)
    created_at = Column(DateTime, default=datetime.utcnow)
