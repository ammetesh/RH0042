import sys
from pathlib import Path

from loguru import logger

from app.core.config import settings


LOG_FORMAT = (
    "<green>{time:YYYY-MM-DD HH:mm:ss}</green> | "
    "<level>{level: <8}</level> | "
    "<cyan>{name}</cyan>:<cyan>{function}</cyan>:<cyan>{line}</cyan> | "
    "<level>{message}</level>"
)


def configure_logger() -> None:
    logger.remove()

    logger.add(
        sys.stdout,
        level=settings.log_level,
        format=LOG_FORMAT,
        enqueue=True,
        backtrace=True,
        diagnose=False,
        colorize=True,
    )

    logger.add(
        Path(settings.log_path) / "backend.log",
        level=settings.log_level,
        format=LOG_FORMAT,
        rotation="10 MB",
        retention="30 days",
        compression="zip",
        enqueue=True,
        backtrace=True,
        diagnose=False,
    )


configure_logger()

__all__ = ["logger"]
