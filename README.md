[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=tluolamo_boilerplate-project-headerparser&metric=alert_status)](https://sonarcloud.io/dashboard?id=tluolamo_boilerplate-project-headerparser)
![CircleCI](https://img.shields.io/circleci/build/github/tluolamo/boilerplate-project-headerparser)
[![codecov](https://codecov.io/gh/tluolamo/boilerplate-project-headerparser/branch/gomix/graph/badge.svg)](https://codecov.io/gh/tluolamo/boilerplate-project-headerparser)

# API Project: Request Header Parser Microservice for freeCodeCamp

### User stories:
1. I can get the IP address, preferred languages (from header `Accept-Language`) and system infos (from header `User-Agent`) for my device.

#### Example usage:
* [base_url]/api/whoami

#### Example output:
* `{"ipaddress":"159.20.14.100","language":"en-US,en;q=0.5","software":"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:50.0) Gecko/20100101 Firefox/50.0"}`
