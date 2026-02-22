function Group() {
  return (
    <div className="absolute inset-[36.85%_-4.84%_36.9%_96.93%]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 152 283.437">
        <g id="Group 6">
          <g id="Vector" />
          <g id="Vector_2" />
          <g id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-[#151515] h-[1080px] left-0 overflow-clip top-0 w-[1920px]">
      <p className="-translate-x-1/2 absolute font-['Archivo:Regular',sans-serif] font-normal leading-[0.94] left-[calc(50%-0.5px)] text-[#fece00] text-[128px] text-center top-[336px] w-[1091px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        ARCHIVO
      </p>
      <p className="-translate-x-1/2 absolute font-['Hind_Vadodara:Regular',sans-serif] leading-[83.42500305175781%] left-1/2 not-italic text-[40px] text-center text-white top-[456px] w-[226px] whitespace-pre-wrap">(Principal)</p>
      <div className="-translate-x-1/2 absolute font-['Archivo:Regular',sans-serif] font-normal leading-[1.25] left-1/2 text-[#d9d9d9] text-[40px] text-center top-[572px] tracking-[5.2px] w-[1090px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="mb-0">{`ABCDEFGHIJKLMÑOPQRSTUVWXYZ `}</p>
        <p className="mb-0">{`abcdefghijklmnñopqrstuvwxyz `}</p>
        <p>1234567890</p>
      </div>
      <p className="absolute font-['Hind_Vadodara:Regular',sans-serif] leading-[39px] left-[calc(50%-809px)] not-italic text-[32px] text-white top-[918px] w-[1487px] whitespace-pre-wrap">La tipografía Archivo, usada en titulares, aporta fuerza y modernidad, destacando los mensajes principales con una presencia clara y jerárquica.</p>
      <div className="absolute bg-[#fece00] h-[129px] left-[114px] top-[869px] w-[7px]" />
      <p className="absolute font-['Archivo:Regular',sans-serif] font-normal leading-[1.25] left-[calc(50%-809px)] text-[#fece00] text-[40px] top-[865px] w-[672px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Fuente principal
      </p>
    </div>
  );
}

function Pag() {
  return (
    <div className="absolute bg-[#151515] h-[1080px] left-0 overflow-clip top-0 w-[1920px]" data-name="Pag 10">
      <Group />
      <Frame />
    </div>
  );
}

export default function Group1() {
  return (
    <div className="relative size-full">
      <Pag />
    </div>
  );
}