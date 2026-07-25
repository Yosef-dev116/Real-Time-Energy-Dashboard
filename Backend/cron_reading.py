import os
import random
import requests
from datetime import datetime, timezone

API_URL = os.environ.get("API_URL", "http://127.0.0.1:8081/api/readings")

POWER_VALUES = [120, 240, 360, 480, 600, 720, 960, 1080]


def main():
    payload = {
        "timestamp": datetime.now(timezone.utc).isoformat().replace("+00:00", "Z"),
        "power": random.choice(POWER_VALUES),
    }
    r = requests.post(API_URL, json=payload, timeout=10)
    print("Sent:", payload, "->", r.status_code)


if __name__ == "__main__":
    main()
