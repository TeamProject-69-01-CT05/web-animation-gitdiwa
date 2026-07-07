'use client';
import { useState } from 'react';
import { elevatorScene } from '@/data/scenes'; 

export default function Home() {
  const script = elevatorScene; 
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
  const scene = script[currentSceneIndex];

  // ฟังก์ชันสำหรับคลิกหน้าจอเพื่ออ่านประโยคถัดไป
  const handleNext = () => {
    if (currentSceneIndex < script.length - 1) {
      setCurrentSceneIndex(currentSceneIndex + 1);
    } else {
      alert("จบฉากนี้แล้ว!");
    }
  };

  // 🔄 "กดเล่นซ้ำฉากนี้ใหม่"
  const handleRestart = (e: React.MouseEvent) => {
    e.stopPropagation();     
    setCurrentSceneIndex(0); 
  };

  return (
    <div 
      onClick={handleNext} 
      className="relative w-full h-screen bg-black overflow-hidden flex flex-col justify-end items-center pb-10 cursor-pointer select-none"
    >
      
      {/* 🔄 ปุ่มเล่นซ้ำ*/}
      <button
        onClick={handleRestart}
        className="absolute top-5 right-5 z-20 bg-gray-900/95 hover:bg-gray-800 text-white border-2 border-white px-5 pt-3 pb-2 rounded-md text-base flex justify-center items-center cursor-pointer transition-all shadow-lg active:scale-95 leading-none"
      >
        เล่นฉากซ้ำ
      </button>

      {/*ฉากหลัง*/}
      <img 
        src={scene.bg} 
        alt="ฉากหลัง" 
        className={`absolute inset-0 w-full h-full object-cover z-0 transition-all duration-500 ${scene.bgClass || 'opacity-60'}`} 
        style={{ imageRendering: 'pixelated' }}
      />

      {/* ระบบแยกหน้าจอ ฉากคุย VS ฉากเดิน */}
      
      {scene.type === 'dialogue' ? (
        /* ฉากยืนคุยกัน (มี 2 ตัวละคร ซ้ายขวา) */
        <div className="absolute inset-0 flex flex-col justify-end items-center pb-10 pointer-events-none">

        {/* 🎬 ฟิลเตอร์ฉากหลังโหมดคัตซีน (เพิ่มความเบลอและขอบมืด) */}
          <div className="absolute inset-0 z-0 pointer-events-none transition-all duration-500">
            {/* 1. แผ่นฟิล์มดำโปร่งแสง + เบลอฉากหลัง */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
            {/* 2. ขอบดำสโลปไล่สีด้านบน (Cinematic Top Bar) */}
            <div className="absolute top-0 w-full h-24 bg-gradient-to-b from-black/90 to-transparent"></div>
            {/* 3. เงาดำขอบจอซ้าย-ขวา (Vignette) */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-black/60"></div>
          </div>

          {/* ตัวละคร */}
          <div className="absolute bottom-[200px] w-full max-w-5xl flex justify-between px-10">
            {/* ซ้าย (ถ้า activeSpeaker เป็น left ให้สว่าง ถ้าไม่ใช่ให้มืด) */}
            <img
              src={scene.leftCharacter}
              alt="ตัวละครซ้าย"
              className={`w-[150px] md:w-[240px] object-contain transition-all duration-300 drop-shadow-2xl ${scene.activeSpeaker === 'left' ? 'brightness-100 scale-105 z-20' : 'brightness-50 opacity-60 scale-95 z-10'}`}
              style={{ imageRendering: 'pixelated' }}
            />
            {/* ขวา (ถ้า activeSpeaker เป็น right ให้สว่าง ถ้าไม่ใช่ให้มืด) */}
            <img
              src={scene.rightCharacter}
              alt="ตัวละครขวา"
              className={`w-[110px] md:w-[230px] object-contain transition-all duration-300 drop-shadow-2xl transform scale-x-[-1] ${scene.activeSpeaker === 'right' ? 'brightness-100 scale-105 z-20' : 'brightness-50 opacity-60 scale-95 z-10'}`}
              style={{ imageRendering: 'pixelated' }}
            />
          </div>

          {/* กล่องข้อความแบบมีลูกศรชี้ */}
          <div className="relative z-30 w-11/12 max-w-4xl bg-black/80 border-4 border-white p-6 rounded-lg shadow-2xl pointer-events-auto">
            {/* ลูกศรชี้คนพูด */}
            <div className={`absolute -top-[24px] w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-b-[24px] border-b-white transition-all duration-500 ease-in-out ${scene.activeSpeaker === 'left' ? 'left-[1%]' : 'left-[96%]'}`}></div>
            <div className={`absolute -top-[17px] z-10 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[18px] border-b-black transition-all duration-500 ease-in-out ${scene.activeSpeaker === 'left' ? 'left-[calc(1%+4px)]' : 'left-[calc(96%+4px)]'}`}></div>

            {/* 🏷️ เนื้อหาในกล่องข้อความ (ชื่อเด้งซ้าย-ขวา) */}
            <div className="space-y-3">
              <h2 className={`text-yellow-400 text-3xl font-bold mb-3 transition-all duration-300 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] ${scene.activeSpeaker === 'right' ? 'text-right' : 'text-left'}`}>
                {scene.speaker}
              </h2>
              <p className="text-white text-2xl leading-relaxed text-left">
                {scene.text}
              </p>
            </div>

            {/* ตัวหนังสือบอกใบ้ให้กดคลิก */}
            <div className="text-right text-xl text-gray-400 mt-4 animate-pulse">
              คลิกหน้าจอเพื่อไปต่อ 
            </div>
          </div>

        </div>
      ) : (

        /* ฉากเดินปกติ (มีตัวละครเดียวตรงกลาง) */
        <>
          {scene.character && (
            <img 
              key={scene.character} 
              src={scene.character} 
              alt="ตัวละคร" 
              className={`absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 ${scene.characterClass || 'w-[600px]'} h-auto drop-shadow-2xl ${scene.animationClass || ""}`}
              style={{ imageRendering: 'pixelated' }} 
            />
          )}

          {/* กล่องข้อความแบบปกติ ไม่มีลูกศร */}
          <div className="relative z-10 w-11/12 max-w-4xl bg-black/80 border-4 border-white p-6 rounded-lg shadow-2xl">
            <h2 className="text-yellow-400 text-3xl font-bold mb-2">
              {scene.speaker}
            </h2>
            <p className="text-white text-2xl leading-relaxed">
              {scene.text}
            </p>
            <div className="text-right text-xl text-gray-400 mt-2 animate-pulse">
              คลิกหน้าจอเพื่อไปต่อ 
            </div>
          </div>
        </>
      )}

    </div>
  );
}