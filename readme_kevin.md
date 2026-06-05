# Prueba de desmpeño SPA

## General description

This is a project for a venue booking company using the single page application methodology, which includes a login for users to register with their credentials and a dashboard for managing venue bookings.

### Administrator (admin)

Can:

- View all reservations
- Create reservations
- Edit reservations
- Delete reservations
- Approve or reject reservations
- Manage workspaces
- Access administrative modules

### User (user)

Can:

- Check available spaces
- Create reservations
- View only their own reservations
- Modify pending reservations
- Cancel their own reservations

---

## Credentials

Administrator:

```txt
admin@test.com
123456
```

User:

```txt
user@test.com
123456
```

---

``` text
  .
├── db.json
├── index.html
├── package.json
├── package-lock.json
├── README.md
├── src
│   ├── api
│   │   └── http.js
│   ├── assets
│   │   ├── hero.png
│   │   ├── javascript.svg
│   │   └── vite.svg
│   ├── components
│   │   ├── ReservationCard.js
│   │   └── Sidebar.js
│   ├── controllers
│   │   ├── home.controller.js
│   │   └── login.controller.js
│   ├── main.js
│   ├── router
│   │   └── router.js
│   ├── services
│   │   └── reservation.service.js
│   ├── style.css
│   ├── utils.js
│   └── views
│       ├── homeView.js
│       ├── loginView.js
│       └── notFound.js
└── vite.config.js

```
