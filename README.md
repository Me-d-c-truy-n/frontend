# Software Design Project

Application for synthesizing and reading novels online

## Table of Contents

- [About](#about)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

## About

Final project

Software Design

### Tech Stack
- Front-end: Reactjs, Material UI, react-router, Tailwind, TanStack Query, Redux Toolkit.
- Back-end: Spring Boot.

## Deployment

Front-end:

Back-end: 

## Installation

```
git clone https://github.com/Me-d-c-truy-n/Frontend.git
```

## Usage

```
npm install
npm run dev
```
or with `Dockerfile`
```
docker build -t sd_frontend .
docker run -dp 5173:5173 sd_frontend
```
or with `docker-compose` file
```
docker compose up -d 
```

Then edit a `.env` file with these variables:

```
VITE_REACT_APP_BASE_URL = http://localhost:8080
VITE_REACT_APP_NAME = YOUR_APP_NAME
```

Then goto http://localhost:5173/

## Features

- Users search for novels as desired, can search by name, by author, by year of publication,...
- Users choose novels to read.
- During the reading process, users can adjust the components displayed on the story reading frame (eg: change text size, font, background color, text color, line spacing, ...).
- In addition, the application also helps users store the status of the novels they are reading, and at the same time helps users quickly move to each specific chapter, episode, and page of the story to continue following.
- Users can export the stories they are reading to ebook files (prc, epub, pdf, ...) so they can easily continue reading on specialized devices.
## Contributing

Document: https://hackmd.io/@nndkhoa9/BJOqZQWCa?fbclid=IwAR3BNm4SORjkG0sd9zUPBsWNmNfnbN7S9-AoLRjTRNWAuLdgGWmzFh7cTg4

This project was created and is actively maintained by:

- [21120447 Nguyễn Nhật Hào](https://github.com/nxhawk/)
- [21120453 Tô Phương Hiếu](https://github.com/phuonghieuto)
- [21120455 Trương Văn Hoài](https://github.com/hcdman)
- [21120457 Lê Minh Hoàng](https://github.com/mihoag)

Detail: http://localhost:5173/thong-tin/nhom-phat-trien
# License

MIT license [@nxhawk](https://github.com/nxhawk/)
