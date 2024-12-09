import Papa from "papaparse";

export const parseCSV = async (file: File): Promise<any[]> => {
  return new Promise((resolve, reject) => {
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results:any) => resolve(results.data),
      error: (error:any) => reject(error),
    });
  });
};
