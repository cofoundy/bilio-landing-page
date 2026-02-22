import imgRecurso281 from "figma:asset/6f3876abf0cf027b799239198e334f764e9aff74.png";

function Pag() {
  return (
    <div className="absolute bg-[#1a1a1a] h-[1080px] left-0 overflow-clip top-0 w-[1920px]" data-name="Pag 2">
      <div className="-translate-x-1/2 absolute blur-[0px] h-[1157px] left-[calc(50%-0.5px)] opacity-49 top-[-39px] w-[2057px]" data-name="Recurso 2-8 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover opacity-20 pointer-events-none size-full" src={imgRecurso281} />
      </div>
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <Pag />
    </div>
  );
}