# OTT WALA 🎬

OTT WALA is a responsive OTT subscription web application built using **React.js, Bootstrap, and JSON Server**. Users can explore different OTT platforms, search for services, and click **Buy Now** to open a payment form. Payment details are submitted to a JSON Server API for demo purposes.

## 🚀 Features

* Responsive OTT WALA navigation bar
* OTT platform dropdown menu
* Search functionality
* OTT service cards
* Subscription pricing
* Buy Now button for each OTT platform
* Centered payment modal/form
* Controlled React form inputs
* Form validation using required fields
* Payment data submission using Fetch API
* JSON Server API integration
* Payment details stored in `db.json`
* Bootstrap responsive UI

## 🛠️ Technologies Used

* React.js
* JavaScript
* HTML5
* CSS3
* Bootstrap
* JSON Server
* Fetch API
* Vite

## 📂 Project Structure

```text
my-react-app
│
├── src
│   ├── component
│   │   └── nav.jsx
│   │
│   ├── Form.jsx
│   ├── App.jsx
│   └── main.jsx
│
├── db.json
├── package.json
└── README.md
```

## ⚙️ Installation

Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Go to the project folder:

```bash
cd my-react-app
```

Install dependencies:

```bash
npm install
```

## ▶️ Run the React Application

Start the Vite development server:

```bash
npm run dev
```

The application will run on the local Vite server.

## 🗄️ Run JSON Server

Open another terminal in the project root and run:

```bash
npx json-server --watch db.json --port 3000
```

The payment API will be available at:

```text
http://localhost:3000/payments
```

## 💳 Payment Flow

1. User opens the OTT WALA application.
2. User selects an OTT subscription.
3. User clicks **BUY NOW**.
4. Payment form opens in the center of the screen.
5. User enters the required details.
6. User clicks **Pay Now**.
7. React sends the form data using a POST request.
8. JSON Server stores the data inside `db.json`.
9. After successful submission, the payment form closes.

## 📡 API Example

Payment details are sent to:

```text
POST http://localhost:3000/payments
```

Example request:

```json
{
  "cardHolder": "Demo User",
  "cardNumber": "4111111111111111",
  "expiry": "12/28",
  "cvv": "123",
  "upi": "demo@upi"
}
```

## 🎯 Learning Objectives

This project helped me practice:

* React functional components
* `useState`
* Props
* Event handling
* Conditional rendering
* Controlled forms
* Form validation
* Fetch API
* POST requests
* JSON Server
* Bootstrap
* Responsive design

## ⚠️ Note

This project uses **JSON Server only for learning and demonstration purposes**. Real card numbers and CVV should never be stored in a JSON file or directly handled by a frontend application. Production applications should use a secure payment gateway and tokenization.

## 👨‍💻 Author

**Sayeed Alam**

Java Full Stack Developer
