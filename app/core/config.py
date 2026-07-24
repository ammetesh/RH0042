from functools import lru_cache
from pathlib import Path

from pydantic import Field
from pydantic_settings import BaseSettings, SettingsConfigDict


BASE_DIR = Path(__file__).resolve().parent.parent.parent


class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file=".env",
        case_sensitive=False,
        extra="ignore"
    )

    app_name: str = Field(default="The 51st Ball Backend", alias="APP_NAME")
    app_version: str = Field(default="1.0.0", alias="APP_VERSION")
    debug: bool = Field(default=True, alias="DEBUG")

    host: str = Field(default="0.0.0.0", alias="HOST")
    port: int = Field(default=8000, alias="PORT")

    database_url: str = Field(alias="DATABASE_URL")

    log_level: str = Field(default="INFO", alias="LOG_LEVEL")

    dataset_path: Path = Field(default=BASE_DIR / "datasets", alias="DATASET_PATH")
    report_path: Path = Field(default=BASE_DIR / "reports", alias="REPORT_PATH")
    model_path: Path = Field(default=BASE_DIR / "models", alias="MODEL_PATH")
    log_path: Path = Field(default=BASE_DIR / "logs", alias="LOG_PATH")

    random_seed: int = Field(default=42, alias="RANDOM_SEED")


@lru_cache
def get_settings() -> Settings:
    settings = Settings()

    settings.dataset_path.mkdir(parents=True, exist_ok=True)
    settings.report_path.mkdir(parents=True, exist_ok=True)
    settings.model_path.mkdir(parents=True, exist_ok=True)
    settings.log_path.mkdir(parents=True, exist_ok=True)

    return settings


settings = get_settings()
