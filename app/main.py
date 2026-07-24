from contextlib import asynccontextmanager

from fastapi import FastAPI
<<<<<<< HEAD
from fastapi.middleware.cors import CORSMiddleware
=======
>>>>>>> 4222929421436f73d6267f7ff43ec8728a6ffbd0
from fastapi.responses import ORJSONResponse

from app.core.config import settings
from app.core.logger import logger
from app.routers import draw_router, analytics_router
<<<<<<< HEAD
from app.routers.upload_router import router as upload_router
=======

>>>>>>> 4222929421436f73d6267f7ff43ec8728a6ffbd0

@asynccontextmanager
async def lifespan(app: FastAPI):
    logger.info(f"Starting {settings.app_name} v{settings.app_version}")
    yield
    logger.info("Shutting down application")


app = FastAPI(
    title=settings.app_name,
    version=settings.app_version,
    debug=settings.debug,
    default_response_class=ORJSONResponse,
    lifespan=lifespan,
)


<<<<<<< HEAD

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(draw_router)
app.include_router(analytics_router)
app.include_router(upload_router)
=======
app.include_router(draw_router)
app.include_router(analytics_router)

>>>>>>> 4222929421436f73d6267f7ff43ec8728a6ffbd0

@app.get("/", tags=["Root"])
async def root():
    return {
        "application": settings.app_name,
        "version": settings.app_version,
        "status": "running",
    }


@app.get("/health", tags=["Health"])
async def health():
    return {
        "status": "healthy",
        "version": settings.app_version,
    }
<<<<<<< HEAD

=======
>>>>>>> 4222929421436f73d6267f7ff43ec8728a6ffbd0
