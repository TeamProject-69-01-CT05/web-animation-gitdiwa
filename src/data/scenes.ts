interface BaseFrame {
  speaker: string;
  text: string;
  bg: string;
  bgClass?: string;
}

interface WalkingFrame extends BaseFrame {
  type: 'walking';
  character: string;
  animationClass?: string;
  characterClass?: string;
}

interface DialogueFrame extends BaseFrame {
  type: 'dialogue';
  leftCharacter: string;
  rightCharacter: string;
  activeSpeaker: 'left' | 'right';
}

export type SceneFrame = WalkingFrame | DialogueFrame;

// 🎬 คัดซีนที่ 1 ฉากเดินออกจากลิฟต์
export const elevatorScene: SceneFrame[] = [
  {
    type: 'walking',
  // อยู่ในลิฟต์มืดๆ
    speaker: "???",
    text: "(บรรยากาศรอบข้างมืดสนิท...)",
    character: "/characters/bob/ยืนตรงหลับตา.gif", // ท่ายืนเฉยๆ
    bg: "/bg/black.png",
    bgClass: "brightness-0" 
  },
  {
    type: 'walking',
    speaker: "Bob",
    text: "อึก... ทำไมออฟฟิศแผนกใหม่มันมืดตึ๊ดตื๋อแบบนี้เนี่ย?",
    character: "/characters/bob/ยืนตรงหลับตา.gif",
    bg: "/bg/black.png",
    bgClass: "brightness-0" 
  },
  {
    type: 'walking',
    speaker: "Bob",
    text: "เราอยู่ในลิฟต์หรอเนี่ย เฮ้อกลัวแทบแย่วันนี้เราต้องตั้งใจทำงานวันแรกของเราให้ดีที่สุด!",
    character: "/characters/bob/เดิน.gif", 
    bg: "/bg/opendoor.png",
    bgClass: "brightness-100",
    animationClass: "animate-walk-down"
  },
  {
    type: 'walking',
  // 🎬 คัดซีนที่ 2 เดินออกจากลิฟต์เพื่อไปที่โต๊ะทำงาน
    speaker: "พี่นนท์",
    text: "อ้าวมาแล้วหรอเดฟใหม่! รีบมานี่เร็ว!",
    character: "/characters/bob/เดินloop.gif", 
    bg: "/bg/เดินออกลิฟต์3.gif",
    bgClass: "brightness-100",
    animationClass: "animate-walk-path",
    characterClass: "w-[350px]" 
  },
  // talktogether
  {
    type: 'dialogue', 
    bg: '/bg/office.png', 
    leftCharacter: '/characters/bob/ยืนตรงหลับตา2.gif', 
    rightCharacter: '/characters/non/non-กระพริบตา2.gif', 
    activeSpeaker: 'right', // ขวาสว่าว
    speaker: 'พี่นนท์',
    text: 'ก่อนจะเริ่มงาน เราต้องรู้ก่อนว่าเครื่องเราพร้อมทำงานไหม'
  },
    {
    type: 'dialogue', 
    bg: '/bg/office.png', 
    leftCharacter: '/characters/bob/ยืนตรงหลับตา2.gif', 
    rightCharacter: '/characters/non/non-กระพริบตา2.gif', 
    activeSpeaker: 'right', // ขวาสว่าว
    speaker: 'พี่นนท์',
    text: 'ลองเช็กดูว่ามี Git อยู่ในเครื่องหรือเปล่า'
  },
  {
    type: 'dialogue', 
    bg: '/bg/office.png',
    leftCharacter: '/characters/bob/ยืนตรงหลับตา2.gif',
    rightCharacter: '/characters/non/non-กระพริบตา2.gif', 
    activeSpeaker: 'left', // ซ้ายสว่าง
    speaker: 'บ๊อบ',
    text: 'Git คืออะไรครับ'
  },
  {
    type: 'dialogue', 
    bg: '/bg/office.png', 
    leftCharacter: '/characters/bob/ยืนตรงหลับตา2.gif', 
    rightCharacter: '/characters/non/non-กระพริบตา2.gif', 
    activeSpeaker: 'right', // ขวาสว่าง
    speaker: 'พี่นนท์',
    text: 'แต่ถ้าอยากรู้ก่อน พี่อธิบายเพิ่มเติมได้นะ เข้าใจหรือยัง?'
  }, 
];
