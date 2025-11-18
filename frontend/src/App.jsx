import React, { useState, createContext, useContext } from 'react';
import { Calendar, Video, Upload, ShoppingCart, User, LogOut, Menu, X, Phone, Mail, MapPin, Clock, Star, Search, MessageSquare, Mic, Camera, FileText, Heart, Activity, Pill, Stethoscope, ChevronRight, Check } from 'lucide-react';

// Context for global state management
const AppContext = createContext();

const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
};

// Book Appointment Page
const BookAppointmentPage = () => {
  const { setCurrentPage } = useApp();
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const doctors = [
    { id: 1, name: 'Dr. Amit Sharma', specialty: 'Cardiologist', rating: 4.8, experience: 15, languages: ['English', 'Hindi'], fee: 500 },
    { id: 2, name: 'Dr. Priya Singh', specialty: 'Dermatologist', rating: 4.9, experience: 12, languages: ['English', 'Hindi', 'Punjabi'], fee: 450 },
    { id: 3, name: 'Dr. Rajesh Kumar', specialty: 'Pediatrician', rating: 4.7, experience: 10, languages: ['English', 'Hindi'], fee: 400 },
    { id: 4, name: 'Dr. Neha Patel', specialty: 'Gynecologist', rating: 4.9, experience: 14, languages: ['English', 'Hindi', 'Gujarati'], fee: 550 }
  ];

  const timeSlots = ['09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', '03:00 PM', '04:00 PM'];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Book an Appointment</h1>

      <div className="mb-6 bg-white p-4 rounded-xl shadow-md">
        <div className="grid md:grid-cols-4 gap-4">
          <input type="text" placeholder="Search doctor..." className="border border-gray-300 rounded-lg px-4 py-2" />
          <select className="border border-gray-300 rounded-lg px-4 py-2">
            <option>All Specializations</option>
            <option>Cardiologist</option>
            <option>Dermatologist</option>
            <option>Pediatrician</option>
            <option>Gynecologist</option>
          </select>
          <select className="border border-gray-300 rounded-lg px-4 py-2">
            <option>All Languages</option>
            <option>English</option>
            <option>Hindi</option>
            <option>Punjabi</option>
          </select>
          <button className="bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 transition">Search</button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {doctors.map((doctor) => (
          <div key={doctor.id} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-4 rounded-full">
                <User className="h-12 w-12 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold">{doctor.name}</h3>
                <p className="text-gray-600">{doctor.specialty}</p>
                <div className="flex items-center mt-2">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm">{doctor.rating} | {doctor.experience} years exp</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">Languages: {doctor.languages.join(', ')}</p>
                <p className="text-lg font-semibold text-green-600 mt-2">₹{doctor.fee}</p>
              </div>
            </div>
            <button onClick={() => setSelectedDoctor(doctor)} className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">Book Now</button>
          </div>
        ))}
      </div>

      {selectedDoctor && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-8 max-w-2xl w-full max-h-screen overflow-y-auto">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-2xl font-bold">{selectedDoctor.name}</h2>
                <p className="text-gray-600">{selectedDoctor.specialty}</p>
              </div>
              <button onClick={() => setSelectedDoctor(null)} className="text-gray-500 hover:text-gray-700">
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold mb-3">Select Date</h3>
              <input type="date" className="border border-gray-300 rounded-lg px-4 py-2 w-full" min={new Date().toISOString().split('T')[0]} />
            </div>

            <div className="mb-6">
              <h3 className="font-semibold mb-3">Select Time Slot</h3>
              <div className="grid grid-cols-3 gap-3">
                {timeSlots.map((slot) => (
                  <button key={slot} onClick={() => setSelectedSlot(slot)} className={`border-2 py-2 rounded-lg transition ${selectedSlot === slot ? 'border-blue-600 bg-blue-50' : 'border-gray-300 hover:border-blue-400'}`}>{slot}</button>
                ))}
              </div>
            </div>

            <div className="border-t pt-4">
              <div className="flex justify-between mb-4">
                <span>Consultation Fee:</span>
                <span className="font-semibold">₹{selectedDoctor.fee}</span>
              </div>
              <button disabled={!selectedSlot} className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition disabled:bg-gray-300 disabled:cursor-not-allowed">Confirm Booking</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Video Call Page
const VideoCallPage = () => {
  const [micOn, setMicOn] = useState(true);
  const [cameraOn, setCameraOn] = useState(true);

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <div className="flex-1 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center">
          <div className="text-white text-center">
            <Video className="h-24 w-24 mx-auto mb-4" />
            <p className="text-xl">Video Call Interface</p>
            <p className="text-sm text-gray-300 mt-2">Connected with Dr. Amit Sharma</p>
          </div>
        </div>

        <div className="absolute top-4 right-4 w-48 h-36 bg-gray-800 rounded-lg border-2 border-white flex items-center justify-center">
          <User className="h-16 w-16 text-white" />
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
          <button onClick={() => setMicOn(!micOn)} className={`p-4 rounded-full ${micOn ? 'bg-gray-700' : 'bg-red-600'} hover:opacity-80 transition`}>
            <Mic className="h-6 w-6 text-white" />
          </button>
          <button onClick={() => setCameraOn(!cameraOn)} className={`p-4 rounded-full ${cameraOn ? 'bg-gray-700' : 'bg-red-600'} hover:opacity-80 transition`}>
            <Camera className="h-6 w-6 text-white" />
          </button>
          <button className="p-4 rounded-full bg-red-600 hover:bg-red-700 transition">
            <Phone className="h-6 w-6 text-white transform rotate-135" />
          </button>
          <button className="p-4 rounded-full bg-gray-700 hover:opacity-80 transition">
            <MessageSquare className="h-6 w-6 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

// Medicine Store Page
const MedicineStorePage = () => {
  const { addToCart } = useApp();

  const medicines = [
    { id: 1, name: 'Paracetamol 500mg', price: 25, stock: 'In Stock', category: 'Pain Relief' },
    { id: 2, name: 'Amoxicillin 250mg', price: 120, stock: 'In Stock', category: 'Antibiotic' },
    { id: 3, name: 'Vitamin D3 60K', price: 45, stock: 'Low Stock', category: 'Supplement' },
    { id: 4, name: 'Cetirizine 10mg', price: 18, stock: 'In Stock', category: 'Allergy' },
    { id: 5, name: 'Omeprazole 20mg', price: 85, stock: 'In Stock', category: 'Digestive' },
    { id: 6, name: 'Aspirin 75mg', price: 32, stock: 'In Stock', category: 'Cardiovascular' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Medicine Store</h1>

      <div className="mb-6 bg-white p-4 rounded-xl shadow-md">
        <div className="flex space-x-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input type="text" placeholder="Search medicines..." className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2" />
          </div>
          <select className="border border-gray-300 rounded-lg px-4 py-2">
            <option>All Categories</option>
            <option>Pain Relief</option>
            <option>Antibiotic</option>
            <option>Supplement</option>
            <option>Allergy</option>
          </select>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {medicines.map((medicine) => (
          <div key={medicine.id} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
            <div className="bg-blue-50 h-32 rounded-lg flex items-center justify-center mb-4">
              <Pill className="h-16 w-16 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{medicine.name}</h3>
            <p className="text-sm text-gray-600 mb-2">{medicine.category}</p>
            <div className="flex items-center justify-between mb-4">
              <span className="text-2xl font-bold text-green-600">₹{medicine.price}</span>
              <span className={`text-sm ${medicine.stock === 'In Stock' ? 'text-green-600' : 'text-orange-600'}`}>{medicine.stock}</span>
            </div>
            <button onClick={() => addToCart(medicine)} className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

// Cart Page
const CartPage = () => {
  const { cart, removeFromCart, setCurrentPage } = useApp();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      {cart.length === 0 ? (
        <div className="bg-white p-12 rounded-xl shadow-lg text-center">
          <ShoppingCart className="h-24 w-24 text-gray-300 mx-auto mb-4" />
          <p className="text-xl text-gray-600 mb-4">Your cart is empty</p>
          <button onClick={() => setCurrentPage('medicine')} className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">Continue Shopping</button>
        </div>
      ) : (
        <>
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            {cart.map((item, index) => (
              <div key={index} className="flex items-center justify-between border-b border-gray-200 py-4 last:border-0">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <Pill className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-600">{item.category}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-lg font-semibold">₹{item.price}</span>
                  <button onClick={() => removeFromCart(index)} className="text-red-600 hover:text-red-700">
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex justify-between text-xl font-bold mb-4">
              <span>Total:</span>
              <span className="text-green-600">₹{total}</span>
            </div>
            <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition">Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

// Upload Report Page
const UploadReportPage = () => {
  const [file, setFile] = useState(null);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Upload Medical Report</h1>

      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center hover:border-blue-500 transition cursor-pointer">
          <Upload className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <p className="text-lg text-gray-600 mb-2">Drag and drop your file here</p>
          <p className="text-sm text-gray-500 mb-4">or</p>
          <input type="file" id="file-upload" className="hidden" onChange={(e) => setFile(e.target.files[0])} accept=".pdf,.jpg,.jpeg,.png" />
          <label htmlFor="file-upload" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition cursor-pointer inline-block">Browse Files</label>
          <p className="text-xs text-gray-500 mt-4">Supported formats: PDF, JPG, PNG (Max 10MB)</p>
        </div>

        {file && (
          <div className="mt-6 p-4 bg-blue-50 rounded-lg flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <FileText className="h-8 w-8 text-blue-600" />
              <div>
                <p className="font-semibold">{file.name}</p>
                <p className="text-sm text-gray-600">{(file.size / 1024).toFixed(2)} KB</p>
              </div>
            </div>
            <button onClick={() => setFile(null)} className="text-red-600 hover:text-red-700">
              <X className="h-6 w-6" />
            </button>
          </div>
        )}

        <div className="mt-6">
          <label className="block text-sm font-medium mb-2">Report Type</label>
          <select className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4">
            <option>Blood Test</option>
            <option>X-Ray</option>
            <option>CT Scan</option>
            <option>MRI</option>
            <option>Other</option>
          </select>

          <label className="block text-sm font-medium mb-2">Notes (Optional)</label>
          <textarea className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4" rows="4" placeholder="Add any relevant notes..."></textarea>

          <button disabled={!file} className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition disabled:bg-gray-300 disabled:cursor-not-allowed">Upload Report</button>
        </div>
      </div>
    </div>
  );
};

// Health Records Page
const HealthRecordsPage = () => {
  const records = [
    { id: 1, type: 'Prescription', doctor: 'Dr. Amit Sharma', date: '2025-11-10', desc: 'Hypertension medication' },
    { id: 2, type: 'Lab Report', doctor: 'Dr. Priya Singh', date: '2025-11-05', desc: 'Blood test results' },
    { id: 3, type: 'Prescription', doctor: 'Dr. Rajesh Kumar', date: '2025-10-28', desc: 'Vitamin supplements' }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Health Records</h1>

      <div className="space-y-4">
        {records.map((record) => (
          <div key={record.id} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <FileText className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{record.type}</h3>
                  <p className="text-sm text-gray-600">By {record.doctor}</p>
                  <p className="text-sm text-gray-500">{record.date}</p>
                  <p className="text-sm text-gray-700 mt-1">{record.desc}</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="text-blue-600 hover:text-blue-700 border border-blue-600 px-4 py-2 rounded-lg">View</button>
                <button className="text-green-600 hover:text-green-700 border border-green-600 px-4 py-2 rounded-lg">Download</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// AI Symptom Checker Page
const AISymptomPage = () => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! I\'m here to help you understand your symptoms. Please describe what you\'re experiencing.' }
  ]);
  const [input, setInput] = useState('');

  const symptoms = ['Fever', 'Headache', 'Cough', 'Fatigue', 'Chest Pain', 'Nausea'];

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { sender: 'user', text: input }]);
    setTimeout(() => {
      setMessages(prev => [...prev, { sender: 'bot', text: 'Based on your symptoms, I recommend consulting a General Physician. Would you like to book an appointment?' }]);
    }, 1000);
    setInput('');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">AI Symptom Checker</h1>

      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Quick Symptom Selection</h2>
        <div className="flex flex-wrap gap-3">
          {symptoms.map((symptom) => (
            <button key={symptom} className="bg-white px-4 py-2 rounded-full shadow hover:shadow-md transition">{symptom}</button>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 mb-4 h-96 overflow-y-auto">
        <div className="space-y-4">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-xs px-4 py-3 rounded-lg ${msg.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800'}`}>
                {msg.text}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex space-x-3">
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && sendMessage()} placeholder="Describe your symptoms..." className="flex-1 border border-gray-300 rounded-lg px-4 py-3" />
        <button onClick={sendMessage} className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">Send</button>
      </div>
    </div>
  );
};

// Profile Page
const ProfilePage = () => {
  const { user } = useApp();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Profile Settings</h1>

      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="flex items-center space-x-6 mb-8">
          <div className="bg-blue-100 p-6 rounded-full">
            <User className="h-20 w-20 text-blue-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">{user?.name}</h2>
            <p className="text-gray-600">{user?.email}</p>
            <button className="text-blue-600 hover:underline mt-2">Change Profile Picture</button>
          </div>
        </div>

        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Full Name</label>
              <input type="text" defaultValue={user?.name} className="w-full border border-gray-300 rounded-lg px-4 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input type="email" defaultValue={user?.email} className="w-full border border-gray-300 rounded-lg px-4 py-2" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Phone Number</label>
              <input type="tel" placeholder="+91 98765 43210" className="w-full border border-gray-300 rounded-lg px-4 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Date of Birth</label>
              <input type="date" className="w-full border border-gray-300 rounded-lg px-4 py-2" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Address</label>
            <textarea className="w-full border border-gray-300 rounded-lg px-4 py-2" rows="3" placeholder="Your address"></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Preferred Language</label>
            <select className="w-full border border-gray-300 rounded-lg px-4 py-2">
              <option>English</option>
              <option>Hindi</option>
              <option>Punjabi</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Medical History</label>
            <textarea className="w-full border border-gray-300 rounded-lg px-4 py-2" rows="4" placeholder="Any chronic conditions, allergies, or ongoing medications"></textarea>
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">Save Changes</button>
        </form>
      </div>
    </div>
  );
};

// Patient Dashboard
const PatientDashboard = () => {
  const { user, setCurrentPage } = useApp();

  const appointments = [
    { doctor: 'Dr. Amit Sharma', specialty: 'Cardiologist', date: '2025-11-20', time: '10:00 AM' },
    { doctor: 'Dr. Priya Singh', specialty: 'Dermatologist', date: '2025-11-22', time: '02:00 PM' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Welcome, {user?.name}</h1>

      <div className="grid md:grid-cols-4 gap-6 mb-8">
        {[
          { icon: Calendar, title: 'Book Doctor', page: 'book-appointment', color: 'blue' },
          { icon: Video, title: 'Video Call', page: 'video-call', color: 'green' },
          { icon: Upload, title: 'Upload Report', page: 'upload-report', color: 'purple' },
          { icon: Pill, title: 'Buy Medicine', page: 'medicine', color: 'red' }
        ].map((item, i) => (
          <button key={i} onClick={() => setCurrentPage(item.page)} className={`bg-${item.color}-50 p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1`}>
            <item.icon className={`h-12 w-12 text-${item.color}-600 mb-3`} />
            <h3 className="font-semibold">{item.title}</h3>
          </button>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Upcoming Appointments</h2>
        <div className="space-y-4">
          {appointments.map((apt, i) => (
            <div key={i} className="flex items-center justify-between border border-gray-200 p-4 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <User className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold">{apt.doctor}</h3>
                  <p className="text-sm text-gray-600">{apt.specialty}</p>
                  <p className="text-sm text-gray-500">{apt.date} at {apt.time}</p>
                </div>
              </div>
              <button onClick={() => setCurrentPage('video-call')} className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">Join Call</button>
            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <button onClick={() => setCurrentPage('health-records')} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
          <FileText className="h-10 w-10 text-blue-600 mb-3" />
          <h3 className="text-xl font-semibold mb-2">My Health Records</h3>
          <p className="text-gray-600">View prescriptions and medical history</p>
        </button>
        
        <button onClick={() => setCurrentPage('ai-symptom')} className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition">
          <Activity className="h-10 w-10 text-purple-600 mb-3" />
          <h3 className="text-xl font-semibold mb-2">AI Symptom Checker</h3>
          <p className="text-gray-600">Get instant health insights</p>
        </button>
      </div>
    </div>
  );
};

// Doctor Dashboard
const DoctorDashboard = () => {
  const { user, setCurrentPage } = useApp();

  const appointments = [
    { patient: 'Rajesh Kumar', age: 45, reason: 'Regular Checkup', time: '10:00 AM', status: 'Scheduled' },
    { patient: 'Priya Sharma', age: 32, reason: 'Follow-up', time: '11:30 AM', status: 'In Progress' },
    { patient: 'Amit Singh', age: 28, reason: 'Consultation', time: '02:00 PM', status: 'Scheduled' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Dr. {user?.name}'s Dashboard</h1>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-blue-50 p-6 rounded-xl shadow-md">
          <Calendar className="h-10 w-10 text-blue-600 mb-3" />
          <h3 className="text-3xl font-bold text-blue-600">{appointments.length}</h3>
          <p className="text-gray-600">Today's Appointments</p>
        </div>
        <div className="bg-green-50 p-6 rounded-xl shadow-md">
          <User className="h-10 w-10 text-green-600 mb-3" />
          <h3 className="text-3xl font-bold text-green-600">127</h3>
          <p className="text-gray-600">Total Patients</p>
        </div>
        <div className="bg-purple-50 p-6 rounded-xl shadow-md">
          <Star className="h-10 w-10 text-purple-600 mb-3" />
          <h3 className="text-3xl font-bold text-purple-600">4.8</h3>
          <p className="text-gray-600">Average Rating</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Today's Appointments</h2>
        <div className="space-y-4">
          {appointments.map((apt, i) => (
            <div key={i} className="flex items-center justify-between border border-gray-200 p-4 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <User className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold">{apt.patient}</h3>
                  <p className="text-sm text-gray-600">Age: {apt.age} | {apt.reason}</p>
                  <p className="text-sm text-gray-500">{apt.time}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className={`px-3 py-1 rounded-full text-sm ${apt.status === 'In Progress' ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'}`}>{apt.status}</span>
                <button onClick={() => setCurrentPage('video-call')} className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">Start Call</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <button onClick={() => setCurrentPage('profile')} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
          <User className="h-10 w-10 text-blue-600 mb-3" />
          <h3 className="text-xl font-semibold mb-2">Patient Records</h3>
          <p className="text-gray-600">View and manage patient history</p>
        </button>
        
        <button onClick={() => setCurrentPage('profile')} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
          <User className="h-10 w-10 text-green-600 mb-3" />
          <h3 className="text-xl font-semibold mb-2">My Profile</h3>
          <p className="text-gray-600">Update availability and information</p>
        </button>
      </div>
    </div>
  );
};

const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [language, setLanguage] = useState('en');
  const [cart, setCart] = useState([]);
  const [currentPage, setCurrentPage] = useState('home');

  const login = (userData) => setUser(userData);
  const logout = () => {
    setUser(null);
    setCurrentPage('home');
  };

  const addToCart = (item) => setCart([...cart, item]);
  const removeFromCart = (index) => setCart(cart.filter((_, i) => i !== index));

  return (
    <AppContext.Provider value={{ user, login, logout, language, setLanguage, cart, addToCart, removeFromCart, currentPage, setCurrentPage }}>
      {children}
    </AppContext.Provider>
  );
};

// Translations
const translations = {
  en: {
    bookAppointment: 'Book Appointment Online',
    login: 'Login',
    signup: 'Sign Up',
    features: 'Features',
    about: 'About Us',
    contact: 'Contact',
    home: 'Home',
    medicine: 'Medicine Store',
    dashboard: 'Dashboard',
    myAppointments: 'My Appointments',
    videoCall: 'Video Consultation',
    healthRecords: 'Health Records',
    profile: 'Profile',
    logout: 'Logout'
  },
  hi: {
    bookAppointment: 'ऑनलाइन अपॉइंटमेंट बुक करें',
    login: 'लॉगिन',
    signup: 'साइन अप',
    features: 'सुविधाएँ',
    about: 'हमारे बारे में',
    contact: 'संपर्क करें',
    home: 'होम',
    medicine: 'दवा की दुकान',
    dashboard: 'डैशबोर्ड',
    myAppointments: 'मेरी अपॉइंटमेंट',
    videoCall: 'वीडियो परामर्श',
    healthRecords: 'स्वास्थ्य रिकॉर्ड',
    profile: 'प्रोफ़ाइल',
    logout: 'लॉगआउट'
  },
  pa: {
    bookAppointment: 'ਆਨਲਾਈਨ ਮੁਲਾਕਾਤ ਬੁੱਕ ਕਰੋ',
    login: 'ਲਾਗਇਨ',
    signup: 'ਸਾਈਨ ਅੱਪ',
    features: 'ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ',
    about: 'ਸਾਡੇ ਬਾਰੇ',
    contact: 'ਸੰਪਰਕ',
    home: 'ਹੋਮ',
    medicine: 'ਦਵਾਈ ਸਟੋਰ',
    dashboard: 'ਡੈਸ਼ਬੋਰਡ',
    myAppointments: 'ਮੇਰੀਆਂ ਮੁਲਾਕਾਤਾਂ',
    videoCall: 'ਵੀਡੀਓ ਸਲਾਹ',
    healthRecords: 'ਸਿਹਤ ਰਿਕਾਰਡ',
    profile: 'ਪ੍ਰੋਫਾਈਲ',
    logout: 'ਲਾਗਆਉਟ'
  }
};

// Navbar Component
const Navbar = () => {
  const { user, logout, language, setLanguage, currentPage, setCurrentPage, cart } = useApp();
  const [mobileMenu, setMobileMenu] = useState(false);
  const t = translations[language];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center cursor-pointer" onClick={() => setCurrentPage('home')}>
            <Heart className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">TeleMedicine</span>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <button onClick={() => setCurrentPage('home')} className="text-gray-700 hover:text-blue-600 transition">{t.home}</button>
            <button onClick={() => setCurrentPage('book-appointment')} className="text-gray-700 hover:text-blue-600 transition">{t.bookAppointment}</button>
            <button onClick={() => setCurrentPage('medicine')} className="text-gray-700 hover:text-blue-600 transition">{t.medicine}</button>
            <button onClick={() => setCurrentPage('about')} className="text-gray-700 hover:text-blue-600 transition">{t.about}</button>
            <button onClick={() => setCurrentPage('contact')} className="text-gray-700 hover:text-blue-600 transition">{t.contact}</button>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <select value={language} onChange={(e) => setLanguage(e.target.value)} className="border border-gray-300 rounded-lg px-3 py-1 text-sm">
              <option value="en">English</option>
              <option value="hi">हिंदी</option>
              <option value="pa">ਪੰਜਾਬੀ</option>
            </select>

            {user ? (
              <div className="flex items-center space-x-3">
                <button onClick={() => setCurrentPage('cart')} className="relative">
                  <ShoppingCart className="h-6 w-6 text-gray-700" />
                  {cart.length > 0 && <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">{cart.length}</span>}
                </button>
                <button onClick={() => setCurrentPage(user.role === 'doctor' ? 'doctor-dashboard' : 'patient-dashboard')} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">{t.dashboard}</button>
                <button onClick={logout} className="text-gray-700 hover:text-red-600"><LogOut className="h-6 w-6" /></button>
              </div>
            ) : (
              <div className="flex space-x-3">
                <button onClick={() => setCurrentPage('login')} className="text-blue-600 border border-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition">{t.login}</button>
                <button onClick={() => setCurrentPage('signup')} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">{t.signup}</button>
              </div>
            )}
          </div>

          <button onClick={() => setMobileMenu(!mobileMenu)} className="md:hidden">
            {mobileMenu ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileMenu && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-3 space-y-2">
            <button onClick={() => { setCurrentPage('home'); setMobileMenu(false); }} className="block w-full text-left py-2">{t.home}</button>
            <button onClick={() => { setCurrentPage('book-appointment'); setMobileMenu(false); }} className="block w-full text-left py-2">{t.bookAppointment}</button>
            <button onClick={() => { setCurrentPage('medicine'); setMobileMenu(false); }} className="block w-full text-left py-2">{t.medicine}</button>
            <button onClick={() => { setCurrentPage('about'); setMobileMenu(false); }} className="block w-full text-left py-2">{t.about}</button>
            <button onClick={() => { setCurrentPage('contact'); setMobileMenu(false); }} className="block w-full text-left py-2">{t.contact}</button>
            {!user && (
              <>
                <button onClick={() => { setCurrentPage('login'); setMobileMenu(false); }} className="block w-full bg-blue-600 text-white py-2 rounded-lg mt-3">{t.login}</button>
                <button onClick={() => { setCurrentPage('signup'); setMobileMenu(false); }} className="block w-full border border-blue-600 text-blue-600 py-2 rounded-lg">{t.signup}</button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

// Footer Component
const Footer = () => {
  const { language } = useApp();
  const t = translations[language];

  return (
    <footer className="bg-gray-800 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">{t.about}</h3>
            <p className="text-gray-300 text-sm">TeleMedicine is a comprehensive telemedicine platform providing quality healthcare to rural and urban areas with multilingual support.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-300 hover:text-white cursor-pointer">{t.home}</li>
              <li className="text-gray-300 hover:text-white cursor-pointer">{t.bookAppointment}</li>
              <li className="text-gray-300 hover:text-white cursor-pointer">{t.medicine}</li>
              <li className="text-gray-300 hover:text-white cursor-pointer">Privacy Policy</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">{t.contact}</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center"><Phone className="h-4 w-4 mr-2" /> +91 98765 43210</div>
              <div className="flex items-center"><Mail className="h-4 w-4 mr-2" /> support@TeleMedicine.com</div>
              <div className="flex items-center"><MapPin className="h-4 w-4 mr-2" /> Ludhiana, Punjab, India</div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          © 2025 TeleMedicine. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

// Landing Page
const LandingPage = () => {
  const { setCurrentPage, language } = useApp();
  const t = translations[language];

  return (
    <div>
      <section className="bg-gradient-to-r from-blue-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold text-gray-800 leading-tight">{t.bookAppointment}</h1>
            <p className="text-xl text-gray-600">Connect with expert doctors through video consultation. Get prescriptions, order medicines, and manage your health records all in one place.</p>
            <div className="flex space-x-4">
              <button onClick={() => setCurrentPage('signup')} className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition shadow-lg">{t.signup}</button>
              <button onClick={() => setCurrentPage('login')} className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition">{t.login}</button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="bg-blue-100 rounded-full p-12">
              <Stethoscope className="h-48 w-48 text-blue-600" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { icon: Calendar, title: 'Book Appointments', desc: 'Schedule consultations with specialists' },
            { icon: Video, title: 'Video Consultation', desc: 'HD video calls with doctors' },
            { icon: Activity, title: 'AI Symptom Checker', desc: 'Get instant health insights' },
            { icon: Pill, title: 'Medicine Delivery', desc: 'Order medicines online' }
          ].map((feature, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2">
              <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Patients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Rajesh Kumar', text: 'Excellent service! Got consultation in my own language.', rating: 5 },
              { name: 'Priya Singh', text: 'Very convenient. The video quality was great.', rating: 5 },
              { name: 'Amrit Kaur', text: 'Medicine delivery was fast and reliable.', rating: 4 }
            ].map((testimonial, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, j) => <Star key={j} className="h-5 w-5 text-yellow-400 fill-current" />)}
                </div>
                <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
                <p className="font-semibold text-gray-800">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// About Page
const AboutPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">About TeleMedicine</h1>
      
      <section className="mb-12">
        <div className="bg-blue-50 p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-700 text-lg">To provide accessible, affordable, and quality healthcare to rural and underserved communities through innovative telemedicine solutions with multilingual support.</p>
        </div>
      </section>

      <section className="mb-12">
        <div className="bg-green-50 p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
          <p className="text-gray-700 text-lg">To become India's leading telemedicine platform, bridging the healthcare gap with low-bandwidth optimized video consultations and AI-powered health assistance.</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-center mb-8">Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: 'Dr. Amit Sharma', role: 'Chief Medical Officer', specialty: 'Internal Medicine' },
            { name: 'Neha Patel', role: 'Chief Technology Officer', specialty: 'AI & Healthcare Tech' },
            { name: 'Dr. Gurpreet Kaur', role: 'Head of Operations', specialty: 'Healthcare Management' }
          ].map((member, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="bg-blue-100 w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center">
                <User className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-blue-600 mb-1">{member.role}</p>
              <p className="text-gray-600 text-sm">{member.specialty}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

// Contact Page
const ContactPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full border border-gray-300 rounded-lg px-4 py-3" />
            <input type="email" placeholder="Your Email" className="w-full border border-gray-300 rounded-lg px-4 py-3" />
            <input type="tel" placeholder="Phone Number" className="w-full border border-gray-300 rounded-lg px-4 py-3" />
            <textarea placeholder="Your Message" rows="5" className="w-full border border-gray-300 rounded-lg px-4 py-3"></textarea>
            <button type="submit" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition w-full">Send Message</button>
          </form>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
          <div className="bg-white p-6 rounded-xl shadow-lg space-y-4">
            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-600">+91 98765 43210</p>
                <p className="text-gray-600">+91 98765 43211 (Emergency)</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Mail className="h-6 w-6 text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-600">support@TeleMedicine.com</p>
                <p className="text-gray-600">contact@TeleMedicine.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold">Address</h3>
                <p className="text-gray-600">TeleMedicine Health Solutions</p>
                <p className="text-gray-600">Sector 32, Ludhiana</p>
                <p className="text-gray-600">Punjab 141001, India</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-200 h-64 rounded-xl flex items-center justify-center">
            <MapPin className="h-16 w-16 text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

// Login Page
const LoginPage = () => {
  const { login, setCurrentPage } = useApp();
  const [isDoctor, setIsDoctor] = useState(false);
  const [email, setEmail] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, role: isDoctor ? 'doctor' : 'patient', name: email.split('@')[0] });
    setCurrentPage(isDoctor ? 'doctor-dashboard' : 'patient-dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center px-4 py-12">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <div className="text-center mb-8">
          <Heart className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-800">Welcome Back</h2>
          <p className="text-gray-600 mt-2">Login to your account</p>
        </div>

        <div className="flex mb-6 bg-gray-100 rounded-lg p-1">
          <button onClick={() => setIsDoctor(false)} className={`flex-1 py-2 rounded-lg transition ${!isDoctor ? 'bg-white shadow' : ''}`}>Patient</button>
          <button onClick={() => setIsDoctor(true)} className={`flex-1 py-2 rounded-lg transition ${isDoctor ? 'bg-white shadow' : ''}`}>Doctor</button>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border border-gray-300 rounded-lg px-4 py-3" required />
          <input type="password" placeholder="Password" className="w-full border border-gray-300 rounded-lg px-4 py-3" required />
          
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <button type="button" onClick={() => setCurrentPage('forgot-password')} className="text-blue-600 hover:underline">Forgot Password?</button>
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">Login</button>
        </form>

        <p className="text-center mt-6 text-gray-600">
          Don't have an account? <button onClick={() => setCurrentPage('signup')} className="text-blue-600 hover:underline">Sign Up</button>
        </p>
      </div>
    </div>
  );
};

// Signup Page
const SignupPage = () => {
  const { login, setCurrentPage } = useApp();
  const [isDoctor, setIsDoctor] = useState(false);
  const [email, setEmail] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    login({ email, role: isDoctor ? 'doctor' : 'patient', name: email.split('@')[0] });
    setCurrentPage(isDoctor ? 'doctor-dashboard' : 'patient-dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center px-4 py-12">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <div className="text-center mb-8">
          <Heart className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-800">Create Account</h2>
          <p className="text-gray-600 mt-2">Join TeleMedicine today</p>
        </div>

        <div className="flex mb-6 bg-gray-100 rounded-lg p-1">
          <button onClick={() => setIsDoctor(false)} className={`flex-1 py-2 rounded-lg transition ${!isDoctor ? 'bg-white shadow' : ''}`}>Patient</button>
          <button onClick={() => setIsDoctor(true)} className={`flex-1 py-2 rounded-lg transition ${isDoctor ? 'bg-white shadow' : ''}`}>Doctor</button>
        </div>

        <form onSubmit={handleSignup} className="space-y-4">
          <input type="text" placeholder="Full Name" className="w-full border border-gray-300 rounded-lg px-4 py-3" required />
          <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border border-gray-300 rounded-lg px-4 py-3" required />
          <input type="tel" placeholder="Phone Number" className="w-full border border-gray-300 rounded-lg px-4 py-3" required />
          <input type="password" placeholder="Password" className="w-full border border-gray-300 rounded-lg px-4 py-3" required />
          <input type="password" placeholder="Confirm Password" className="w-full border border-gray-300 rounded-lg px-4 py-3" required />
          
          {isDoctor && (
            <>
              <input type="text" placeholder="Specialization" className="w-full border border-gray-300 rounded-lg px-4 py-3" required />
              <input type="text" placeholder="License Number" className="w-full border border-gray-300 rounded-lg px-4 py-3" required />
            </>
          )}

          <label className="flex items-start text-sm">
            <input type="checkbox" className="mr-2 mt-1" required />
            <span>I agree to the Terms of Service and Privacy Policy</span>
          </label>

          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">Sign Up</button>
        </form>

        <p className="text-center mt-6 text-gray-600">
          Already have an account? <button onClick={() => setCurrentPage('login')} className="text-blue-600 hover:underline">Login</button>
        </p>
      </div>
    </div>
  );
};

// Forgot Password Page
const ForgotPasswordPage = () => {
  const { setCurrentPage } = useApp();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6">Reset Password</h2>
        <p className="text-gray-600 text-center mb-6">Enter your email to receive password reset instructions</p>
        
        <form className="space-y-4">
          <input type="email" placeholder="Email Address" className="w-full border border-gray-300 rounded-lg px-4 py-3" required />
          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">Send Reset Link</button>
        </form>

        <button onClick={() => setCurrentPage('login')} className="w-full text-center mt-4 text-blue-600 hover:underline">Back to Login</button>
      </div>
    </div>
  );
};

// Main App Component
const App = () => {
  const { currentPage } = useApp();

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <LandingPage />;
      case 'book-appointment':
        return <BookAppointmentPage />;
      case 'video-call':
        return <VideoCallPage />;
      case 'medicine':
        return <MedicineStorePage />;
      case 'cart':
        return <CartPage />;
      case 'upload-report':
        return <UploadReportPage />;
      case 'health-records':
        return <HealthRecordsPage />;
      case 'ai-symptom':
        return <AISymptomPage />;
      case 'profile':
        return <ProfilePage />;
      case 'patient-dashboard':
        return <PatientDashboard />;
      case 'doctor-dashboard':
        return <DoctorDashboard />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      case 'login':
        return <LoginPage />;
      case 'signup':
        return <SignupPage />;
      case 'forgot-password':
        return <ForgotPasswordPage />;
      default:
        return <LandingPage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {currentPage !== 'video-call' && currentPage !== 'login' && currentPage !== 'signup' && currentPage !== 'forgot-password' && <Navbar />}
      {renderPage()}
      {currentPage !== 'video-call' && currentPage !== 'login' && currentPage !== 'signup' && currentPage !== 'forgot-password' && <Footer />}
    </div>
  );
};

// Main Export
export default function TeleMedicineApp() {
  return (
    <AppProvider>
      <App />
    </AppProvider>
  );
}