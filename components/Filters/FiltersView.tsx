import * as React from 'react';
import { FilterBox } from './FilterBox';
import { SearchTag } from './SearchTag';
import { GenreItem } from './GenreItem';
import { IconButton } from './IconButton';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export const FiltersView: React.FC<ModalProps> = ({isOpen, onClose, children}) => {
  if (!isOpen) return null;
  const searchTags = [
    { label: 'Drake', isActive: false },
    { label: 'Travis Scott', isActive: true },
    { label: 'Playboy Carti', isActive: false }
  ];

  const genreItems = [
    { name: 'Pop', isSelected: false },
    { name: 'Rap/Hip-Hop', isSelected: true, hasSubItems: true },
    { name: 'Trap', isSelected: false, indent: true },
    { name: 'Old School', isSelected: false, indent: true }
  ];

  return (
    <div className="flex overflow-hidden flex-col items-center pt-3.5 backdrop-blur-[50px] bg-[linear-gradient(0deg,#3D3D3D_0%,#3D3D3D_100%,rgba(127,127,127,0.50))] max-w-[393px] rounded-[50px_50px_0px_0px]">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5dc03bc9d4813a5603d7ad871a92017ae249892a8a651a2f37cf98327fd2c62c?placeholderIfAbsent=true&apiKey=20be4e0c6a5946abafbccd8ebd52ccdf"
        alt=""
        className="object-contain aspect-[10.99] stroke-[5px] stroke-zinc-500 stroke-opacity-40 w-[55px]"
      />
      <div className="mt-6 text-3xl font-extrabold text-center text-white">
        Фильтры
      </div>
      <div className="flex flex-col mt-6 w-full max-w-[361px]">
        <div className="flex gap-4 self-start min-h-[130px] rounded-[34px] shadow-[0px_20px_50px_rgba(0,0,0,0.4)]">
          <FilterBox title="Темп" subtitle="не указан" hasDropdown />
          <FilterBox title="Тональность" subtitle="не указана" />
        </div>
        
        <div className="flex overflow-hidden flex-col pt-2.5 pb-6 pl-2.5 mt-6 w-full text-base text-center border border-solid shadow-2xl bg-[linear-gradient(0deg,rgba(61,61,61,0.50_0%,rgba(61,61,61,0.50)_100%),rgba(127,127,127,0.40))] border-neutral-600 border-opacity-30 rounded-[34px]">
          <div className="flex overflow-hidden gap-2.5 items-center px-4 w-full leading-none rounded-3xl border border-solid bg-[linear-gradient(0deg,rgba(61,61,61,0.50_0%,rgba(61,61,61,0.50)_100%),rgba(127,127,127,0.20))] border-neutral-600 border-opacity-30 min-h-[48px] text-neutral-400">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca750755175f589362f646913e65df688cd183791a2e827fce45d4b2b9cad145?placeholderIfAbsent=true&apiKey=20be4e0c6a5946abafbccd8ebd52ccdf"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
            />
            <div className="self-stretch my-auto">
              Travis Scott <span className="text-neutral-400">Type Beat</span>
            </div>
          </div>
          <div className="flex gap-2.5 items-center pl-4 mt-6 w-full min-h-[31px]">
            <div className="self-stretch my-auto text-white">Часто ищут</div>
            <div className="flex gap-1.5 items-center self-stretch my-auto font-bold leading-none min-w-[240px] text-neutral-400">
              {searchTags.map((tag, index) => (
                <SearchTag key={index} {...tag} />
              ))}
            </div>
          </div>
        </div>

        <div className="flex overflow-hidden flex-col p-2.5 mt-6 w-full border border-solid shadow-2xl bg-zinc-500 bg-opacity-20 border-neutral-600 border-opacity-30 rounded-[34px]">
          <div className="flex gap-10 items-center">
            <div className="flex gap-2.5 items-center self-stretch pl-4 my-auto text-2xl leading-none text-center text-white whitespace-nowrap">
              <div className="self-stretch my-auto">Жанр</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a1b795f34bbb435f185a4793d9dff477695de849b9f1c2158977bc098f91297?placeholderIfAbsent=true&apiKey=20be4e0c6a5946abafbccd8ebd52ccdf"
                alt=""
                className="object-contain shrink-0 self-stretch my-auto aspect-[1.88] w-[15px]"
              />
            </div>
            <div className="flex gap-2.5 justify-center items-center self-stretch my-auto w-12 h-12 rounded-3xl border border-solid bg-[linear-gradient(0deg,rgba(61,61,61,0.50_0%,rgba(61,61,61,0.50)_100%),rgba(127,127,127,0.20))] border-neutral-600 border-opacity-30 min-h-[48px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/659237bb3b659b46b67c27e1617ec90b5186ebcadb74232861f5779fecbc57dd?placeholderIfAbsent=true&apiKey=20be4e0c6a5946abafbccd8ebd52ccdf"
                alt=""
                className="object-contain self-stretch my-auto w-5 aspect-square"
              />
            </div>
          </div>
          <div className="flex overflow-hidden flex-col justify-center p-4 mt-2.5 w-full rounded-3xl border border-solid bg-[linear-gradient(0deg,rgba(61,61,61,0.50_0%,rgba(61,61,61,0.50)_100%),rgba(127,127,127,0.20))] border-neutral-600 border-opacity-30">
            <div className="flex overflow-hidden flex-col items-start w-full">
              {genreItems.map((item, index) => (
                <GenreItem key={index} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex z-10 flex-col self-stretch pt-2.5 mt-0 w-full text-lg font-extrabold leading-none text-center text-black whitespace-nowrap min-h-[100px]">
        <div className="flex gap-2.5 items-start px-6 w-full min-h-[50px]">
          <button className="flex overflow-hidden gap-2.5 justify-center items-center px-2.5 bg-white rounded-3xl shadow-2xl min-h-[50px] w-[223px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/86acc5c29f1948385cf7a1b137cf5a122af44fc7071d6d5ad1f8c47456b4adfb?placeholderIfAbsent=true&apiKey=20be4e0c6a5946abafbccd8ebd52ccdf"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto aspect-square w-[25px]"
            />
            <span className="self-stretch my-auto">применить</span>
          </button>
          <IconButton src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a88b3483370c8f2204500f15ef4fdb49a1cad5dad6b8412c20a5207c206d1f7?placeholderIfAbsent=true&apiKey=20be4e0c6a5946abafbccd8ebd52ccdf" alt="Action button 1" />
          <IconButton src="https://cdn.builder.io/api/v1/image/assets/TEMP/b9a64055d10dd52025a2cf7d8d8181481d9027bb814f6d52d310617a1a16b66f?placeholderIfAbsent=true&apiKey=20be4e0c6a5946abafbccd8ebd52ccdf" alt="Action button 2" />
        </div>
      </div>
    </div>
  );
};
