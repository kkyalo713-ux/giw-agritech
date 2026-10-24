export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-green-700">GIW AgriTech</h1>
        <p className="mt-2 text-gray-600">
          Connected to Firebase Project: <strong>{import.meta.env.VITE_FIREBASE_PROJECT_ID}</strong>
        </p>
      </div>
    </div>
  );
}