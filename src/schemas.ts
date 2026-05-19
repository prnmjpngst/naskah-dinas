export const DocumentSchemas = {
  suratTugas: {
    title: "Surat Tugas",
    fields: {
      nomor: { label: "Nomor Surat", type: "text" },
      dasar: { label: "Dasar", type: "textarea" },
      kepada: { label: "Kepada (Daftar Pegawai)", type: "array", itemFields: { nama: "text", nip: "text", jabatan: "text" } },
      untuk: { label: "Untuk", type: "textarea" },
      tanggal: { label: "Tanggal Surat", type: "date" }
    }
  },
  notaDinas: {
    title: "Nota Dinas",
    fields: {
      yth: { label: "Yth.", type: "text" },
      dari: { label: "Dari", type: "text" },
      tanggal: { label: "Tanggal", type: "date" },
      nomor: { label: "Nomor", type: "text" },
      sifat: { label: "Sifat", type: "text" },
      hal: { label: "Hal", type: "text" },
      isi: { label: "Isi Nota", type: "textarea" }
    }
  },
  suratDinas: {
    title: "Surat Dinas",
    fields: {
      nomor: { label: "Nomor", type: "text" },
      sifat: { label: "Sifat", type: "text" },
      lampiran: { label: "Lampiran", type: "text" },
      hal: { label: "Hal", type: "text" },
      yth: { label: "Yth.", type: "text" },
      di: { label: "Di", type: "text" },
      isi: { label: "Isi Surat", type: "textarea" },
      penandaTangan: { label: "Penanda Tangan", type: "object", fields: { nama: "text", jabatan: "text", nip: "text" } }
    }
  }
};
