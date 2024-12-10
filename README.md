# MicFlow  

**MicFlow** is a cutting-edge **AI SaaS platform** that redefines podcast creation, discovery, and enjoyment. Leveraging state-of-the-art technology, it enables users to transform text into engaging audio content, generate eye-catching podcast thumbnails using AI, and enjoy seamless playback with a robust podcast player.  
MicFlow is a revolutionary platform for podcasters and enthusiasts, offering advanced AI tools for podcast creation, effortless discovery, and immersive listening. Its modern design and robust features make podcasting accessible to everyone.  

---

## ⚙️ **Tech Stack**  
- **Next.js**: For server-side rendering and a dynamic web experience.  
- **TypeScript**: Ensuring type safety and maintainable code.  
- **Convex**: For seamless backend and real-time updates.  
- **OpenAI**: Empowering multi-voice AI for podcast creation and AI image generation.  
- **Clerk**: Providing robust authentication and user management.  
- **ShadCN**: For modern UI components.  
- **Tailwind CSS**: Ensuring responsive and visually appealing design.  

---

## 🔋 **Features**  

### 🎧 **Podcast Experience**  
- **Modern Home Page**: Highlight trending podcasts with a sticky player for uninterrupted listening.  
- **Discover Podcasts Page**: Explore new and popular podcasts effortlessly.  
- **Fully Functional Search**: Search for podcasts using multiple criteria.  
- **Podcast Details Page**: Comprehensive information about podcasts, including creator details, listener count, and transcript.  

### ✨ **Podcast Creation**  
- **Create Podcast Page**: Convert text to audio with multi-voice AI, generate AI-powered thumbnail images, and preview your podcast.  
- **Multi-Voice AI Functionality**: Add dynamism to podcasts with multiple AI-generated voices.  

### 🛠 **User Features**  
- **Robust Authentication**: Secure and reliable user login and registration powered by Clerk.  
- **Profile Page**: Manage your created podcasts with options to view and delete.  

### 🎵 **Playback Features**  
- **Podcast Player**: Includes backward/forward controls and mute/unmute functionality for a seamless listening experience.  

### 📱 **Responsive Design**  
- Fully functional and visually appealing across all devices and screen sizes.  

---

## 🤸 **Quick Start**  

### **Prerequisites**  
Ensure you have the following installed on your machine:  
- Git  
- Node.js  
- npm (Node Package Manager)  

### **Cloning the Repository**  
```bash  
git clone https://github.com/Hozipitol/MicFlow.git  
cd MicFlow  
```  

### **Installation**  
Install the project dependencies:  
```bash  
npm install  
```  

### **Set Up Environment Variables**  
1. Create a `.env` file in the root directory.  
2. Add the following content:  
   ```env  
   CONVEX_DEPLOYMENT=  
   NEXT_PUBLIC_CONVEX_URL=  
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=  
   CLERK_SECRET_KEY=  
   NEXT_PUBLIC_CLERK_SIGN_IN_URL='/sign-in'  
   NEXT_PUBLIC_CLERK_SIGN_UP_URL='/sign-up'  
   ```  
3. Replace placeholder values with your **Convex** and **Clerk** credentials.  

### **Running the Project**  
Start the development server:  
```bash  
npm run dev  
```  
Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.  

---

> **Join the revolution in podcasting with MicFlow today!**  
