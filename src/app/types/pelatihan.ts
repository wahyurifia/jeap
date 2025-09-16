export type DataPelatihanType = {
  title: string;
  date: string;
  category: category[];
};

export type category = {
  label: string;
  surats: surat[];
};

export type surat = {
  no: number;
  noSurat: string;
  nama: string;
};
