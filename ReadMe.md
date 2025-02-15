Steps to Set Up FastAPI, Next.js, Alembic, and PostgreSQL with Docker (No Manual Alembic Setup)
1️⃣ Prepare FastAPI Backend with Alembic Pre-Configured
📌 Step 1.1: Install Dependencies
In fastapi-backend/requirements.txt:

fastapi
uvicorn
SQLAlchemy
psycopg2
alembic
📌 Step 1.2: Set Up Database Connection
Create fastapi-backend/database.py:


from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

DATABASE_URL = "postgresql://user:password@db/hospitaldb"

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(bind=engine, autocommit=False, autoflush=False)
Base = declarative_base()
2️⃣ Initialize Alembic Before Docker Build
📌 Step 2.1: Initialize Alembic (Run This on Local Machine)
Before building the Docker image, run this inside your project directory:

cd fastapi-backend
alembic init alembic
This will create an alembic/ directory inside fastapi-backend/ with alembic.ini.

📌 Step 2.2: Configure alembic.ini
Modify fastapi-backend/alembic.ini:


sqlalchemy.url = postgresql://user:password@db/hospitaldb
📌 Step 2.3: Create Migrations Folder

mkdir -p fastapi-backend/alembic/versions
📌 Step 2.4: Generate the Initial Migration

cd fastapi-backend
alembic revision --autogenerate -m "Initial migration"
✅ Now, the alembic.ini file and migrations are ready before running Docker.

3️⃣ Set Up Docker
📌 Step 3.1: FastAPI Dockerfile
Modify fastapi-backend/Dockerfile:


FROM python:3.11

WORKDIR /app

COPY requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt

COPY . /app/

CMD ["sh", "-c", "alembic upgrade head && uvicorn main:app --host 0.0.0.0 --port 8000"]
✅ Now, Alembic migrations automatically run when the container starts.

4️⃣ Create docker-compose.yml
In hospital-management/docker-compose.yml:

version: '3.8'

services:
  backend:
    build: ./fastapi-backend
    ports:
      - "8000:8000"
    volumes:
      - ./fastapi-backend:/app
    depends_on:
      - db
    environment:
      - PYTHONUNBUFFERED=1
    restart: always

  frontend:
    build: ./next-frontend
    podrts:
      - "3000:3000"
    volumes:
      - ./next-frontend:/app
      - /app/node_modules
    depends_on:
      - backend
    restart: always

  db:
    image: postgres:15
    ports:
      - "5432:5432"
    volumes:
      - db-data:/var/lib/postgresql/data
    environment:
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=password
      - POSTGRES_DB=hospitaldb
    restart: always

volumes:
  db-data:
5️⃣ Run Everything in One Command
Now, without any manual Alembic setup inside the container, simply run:


docker-compose up --build
✅ Alembic will run automatically when the backend starts, applying migrations.


DO THE FOLLOWING IF YOU SEE DEPENDENCY ISSUES:
docker-compose down -v  # Removes all volumes, including node_modules
docker-compose up --build  # Fully rebuilds the container