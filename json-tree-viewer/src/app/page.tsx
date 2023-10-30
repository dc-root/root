'use client';

import { useEffect, useRef, useState } from "react";
import PreComp from "./components";

export default function Home() {
  const [jsonData, setJsonData] = useState(null);
  const [fileName, setFileName] = useState('');
  const [isLoadingFile, setIsLoadingFile] = useState(false);
  const [error, setError] = useState({ isError: false, errorMessage: '' });
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files && files.length > 0) {
      const file = files[0];

      if (file) {
        try {
          setIsLoadingFile(true);
          setFileName(file.name);

          const content = await readFileAsync(file);
          const parsedData = JSON.parse(content);

          setJsonData(parsedData)
          setError({ isError: false, errorMessage: '' });
          setIsLoadingFile(false);
        } catch (error: any) {
            setError({ isError: true, errorMessage: error.message });
            setFileName('');
            setJsonData(null);
            setIsLoadingFile(false);
        }
      }
    }
  };

  const readFileAsync = (file: any): any => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event: any) => {
        resolve(event.target.result);
      };
      reader.onerror = (event: any) => {
        reject(event.target.error);
      };
      reader.readAsText(file);
    });
  };

  return (<>
      <div>
        <button
          disabled={isLoadingFile}
          className='max-w-max py-1 px-3 rounded-md ring-1 bg-gray-300 ring-zinc-950/25 brightness-95 hover:brightness-100 transition-all	ease-in	delay-100 disabled:brightness-100 disabled:hover:brightness-100 disabled:text-zinc-500 disabled:ring-transparent disabled:cursor-not-allowed'
          onClick={handleButtonClick}
        >
          {isLoadingFile ? (
            <div className="inline-flex items-end">
              Loading <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 mr-2" width="15" height="15" viewBox="0 0 24 24"><circle cx="4" cy="12" r="3" fill="currentColor"><animate id="svgSpinners3DotsBounce0" attributeName="cy" begin="0;svgSpinners3DotsBounce1.end+0.25s" calcMode="spline" dur="0.6s" keySplines=".33,.66,.66,1;.33,0,.66,.33" values="12;6;12"/></circle><circle cx="12" cy="12" r="3" fill="currentColor"><animate attributeName="cy" begin="svgSpinners3DotsBounce0.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".33,.66,.66,1;.33,0,.66,.33" values="12;6;12"/></circle><circle cx="20" cy="12" r="3" fill="currentColor"><animate id="svgSpinners3DotsBounce1" attributeName="cy" begin="svgSpinners3DotsBounce0.begin+0.2s" calcMode="spline" dur="0.6s" keySplines=".33,.66,.66,1;.33,0,.66,.33" values="12;6;12"/></circle></svg> json
            </div>
            ) : (
              <>Load json</>
            )}
        </button>

        <input
          type="file"
          accept=".json"
          style={{ display: 'none' }}
          ref={fileInputRef}
          onChange={handleFileChange}
        />
      </div>

      <h3 className="text-lg text-black font-semibold">{fileName}</h3>

      {(!error.isError) ?
        <PreComp.TreeJsonView data={jsonData} />
      : <>
          <p className="text-red-500">Invalid file. Please load a valid JSON file.</p>
          <small className="text-red-500">{error.errorMessage}</small>
        </>
      }
  </>)
}
