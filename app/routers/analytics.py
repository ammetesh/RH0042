
from app.analytics.hot_cold import hot_cold_numbers

@router.get("/hot-cold")
def get_hot_cold(draw_service: DrawService = Depends()):
    draws = draw_service.get_all_draws()
    return hot_cold_numbers(draws)

