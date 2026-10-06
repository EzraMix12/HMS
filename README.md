# PulseClinic CMS Lite

A lightweight, multi-page Clinic Management System built with HTML5, Tailwind CSS, and vanilla JavaScript.

## 🚀 Features

- **Live Waiting Queue Dashboard** - Real-time patient queue management with status tracking
- **Patient Registry Directory** - Complete patient information management
- **EMR Consultation Screen** - SOAP notes and printable prescriptions
- **Billing & Cashiering** - Itemized billing with predefined services
- **Responsive Design** - Works seamlessly on desktop and mobile devices

## 🛠️ Technology Stack

- **Frontend**: HTML5, Tailwind CSS (CDN), FontAwesome
- **State Management**: Browser localStorage
- **Deployment**: Vercel

## 📋 Pages

1. **index.html** - Landing page with hero section
2. **dashboard.html** - Queue management and statistics
3. **registry.html** - Patient directory and registration
4. **emr.html** - Clinical consultation and prescriptions
5. **billing.html** - Billing and payment processing
6. **storage.js** - Centralized state management

## 🎯 Demo Features

- Pre-loaded sample patients (Juan Dela Cruz, Maria Santos)
- Live queue with status transitions (Waiting → Consultation → Completed)
- CRUD operations for patients
- Printable prescription forms
- Itemized billing with real-time totals

## 🚀 Deployment

This project is deployed on Vercel and runs entirely in the browser using localStorage for data persistence.

### Deploy Your Own

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/pulseclinic-lite)

### Local Development

Simply open `index.html` in your browser or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000`

## 📝 Future Enhancements

- C# .NET Core Backend API
- PostgreSQL database integration
- User authentication & authorization
- Appointment scheduling
- Advanced reporting & analytics
- Multi-user real-time synchronization

## 📄 License

MIT License - feel free to use this for your projects!

## 👨‍⚕️ Made for Healthcare Providers

Built with care for clinics seeking a simple, effective patient management solution.
