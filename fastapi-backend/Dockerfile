FROM python:3.11

WORKDIR /app

COPY requirements.txt /app/

RUN pip install --no-cache-dir -r /app/requirements.txt

COPY . /app/

EXPOSE 8000

CMD sh -c "alembic upgrade head && uvicorn main:app --host 0.0.0.0 --port 8000"
