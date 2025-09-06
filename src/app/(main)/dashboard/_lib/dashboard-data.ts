// app/dashboard/_lib/dashboard-data.ts
// Ini adalah Server Function, tidak memerlukan "use client"


interface Ticket {
  id: string;
  no_ticket: string;
  title: string;
  description: string; // Menambahkan deskripsi
  // status: TicketStatus;
  person_in_charge: string;
  resolved_date: string | null; // Menambahkan resolved_date
  rootcause_solution: string | null; // Menambahkan rootcause_solution
  created_at: string;
  location: string;
}

export async function getDashboardData() {
  await new Promise(resolve => setTimeout(resolve, 500));
  return {
    totalTickets: 1250,
    resolvedTickets: 930,
    closedTickets: 900,
    activeTickets: 250,
    pendingTickets: 70,
  };
}

export async function getRecentTickets(): Promise<Ticket[]> {
  await new Promise(resolve => setTimeout(resolve, 700));

  const ticketsData = [
    {
      id: "T12345",
      no_ticket: "INCP0297441",
      title: "Tarif Pandu seharusnya 200% bukan 400%",
      description: "Tarif Pandu seharusnya 200% bukan 400% untuk kapal yang berlayar di wilayah perairan Indonesia.",
      status: "Active",
      person_in_charge: "Tim Internal",
      resolved_date: null,
      rootcause_solution: null,
      created_at: "2025-06-10T01:35:39Z",
      location: "Pangkalan susu",
    },
    {
      id: "T12346",
      no_ticket: "INCP0297442",
      title: "Aplikasi tidak bisa diakses via mobile",
      description: "Pengguna melaporkan bahwa aplikasi tidak bisa diakses melalui perangkat mobile.",
      status: "Active", // Mengubah dari 'Pending' ke 'In Progress' untuk variasi
      person_in_charge: "Andre Wijaya",
      resolved_date: null,
      rootcause_solution: null,
      created_at: "2025-06-11T10:00:00Z",
      location: "Jakarta",
    },
    {
      id: "T12347",
      no_ticket: "INCP0297443",
      title: "Permintaan penambahan fitur baru di dashboard",
      description: "Pengguna meminta penambahan fitur baru di dashboard untuk mempermudah akses informasi.",
      status: "Pending",
      person_in_charge: "Budi Santoso",
      resolved_date: null,
      rootcause_solution: null,
      created_at: "2025-06-12T15:30:00Z",
      location: "Surabaya",
    },
    {
      id: "T12348",
      no_ticket: "INCP0297444",
      title: "Data laporan penjualan tidak sinkron",
      description: "Data laporan penjualan tidak sinkron antara sistem ERP dan CRM.",
      status: "Resolved",
      person_in_charge: "Siti Aminah",
      resolved_date: "2025-06-15T11:00:00Z", // Contoh resolved_date
      rootcause_solution: "Perbaikan script sinkronisasi data pada server.", // Contoh rootcause_solution
      created_at: "2025-06-13T09:45:00Z",
      location: "Bandung",
    },
    {
      id: "T12349",
      no_ticket: "INCP0297445",
      title: "Permasalahan koneksi database ERP",
      description: "Pengguna melaporkan adanya permasalahan koneksi ke database ERP yang menyebabkan aplikasi tidak responsif.",
      status: "Closed",
      person_in_charge: "Dewi Lestari",
      resolved_date: "2025-06-16T14:00:00Z",
      rootcause_solution: "Restart service database dan optimasi query.",
      created_at: "2025-06-14T11:20:00Z",
      location: "Medan",
    },
    {
      id: "T12350",
      no_ticket: "INCP0297446",
      title: "Email notifikasi tidak terkirim",
      description: "Sistem tidak mengirimkan email notifikasi kepada pengguna setelah tiket diupdate.",
      status: "Active",
      person_in_charge: "Faisal Rahman",
      resolved_date: null,
      rootcause_solution: null,
      created_at: "2025-06-15T08:00:00Z",
      location: "Makassar",
    },
    {
      id: "T12351",
      no_ticket: "INCP0297447",
      title: "Akses VPN terputus secara berkala",
      description: "Beberapa pengguna mengalami masalah koneksi VPN yang sering terputus.",
      status: "Resolved",
      person_in_charge: "Gita Putri",
      resolved_date: null,
      rootcause_solution: null,
      created_at: "2025-06-16T13:45:00Z",
      location: "Palembang",
    },
    {
      id: "T12352",
      no_ticket: "INCP0297448",
      title: "Error saat generate laporan bulanan",
      description: "Sistem gagal menggenerate laporan bulanan untuk periode terakhir.",
      status: "Pending",
      person_in_charge: "Hadi Kusuma",
      resolved_date: null,
      rootcause_solution: null,
      created_at: "2025-06-17T11:10:00Z",
      location: "Pontianak",
    },
    {
      id: "T12353",
      no_ticket: "INCP0297449",
      title: "Request instalasi software baru di workstation",
      description: "Permintaan instalasi software desain grafis pada workstation divisi desain.",
      status: "Resolved",
      person_in_charge: "Indah Sari",
      resolved_date: "2025-06-20T09:00:00Z",
      rootcause_solution: "Instalasi software berhasil dilakukan dan diverifikasi.",
      created_at: "2025-06-18T09:30:00Z",
      location: "Semarang",
    },
    {
      id: "T12354",
      no_ticket: "INCP0297450",
      title: "Permintaan reset password user lama",
      description: "Pengguna lama tidak dapat login karena lupa password, butuh reset.",
      status: "Closed",
      person_in_charge: "Joko Susilo",
      resolved_date: "2025-06-21T10:00:00Z",
      rootcause_solution: "Password berhasil direset, user dapat login kembali.",
      created_at: "2025-06-19T10:00:00Z",
      location: "Yogyakarta",
    },
    {
      id: "T12355",
      no_ticket: "INCP0297451",
      title: "Kinerja server melambat drastis",
      description: "Server aplikasi utama mengalami penurunan kinerja yang signifikan.",
      status: "Active",
      person_in_charge: "Kiki Amalia",
      resolved_date: null,
      rootcause_solution: null,
      created_at: "2025-06-20T14:00:00Z",
      location: "Denpasar",
    },
    {
      id: "T12356",
      no_ticket: "INCP0297452",
      title: "Integrasi sistem pembayaran gagal",
      description: "Integrasi dengan payment gateway baru mengalami kegagalan transaksi.",
      status: "Active",
      person_in_charge: "Lukman Hakim",
      resolved_date: null,
      rootcause_solution: null,
      created_at: "2025-06-21T09:00:00Z",
      location: "Batam",
    },
    {
      id: "T12357",
      no_ticket: "INCP0297453",
      title: "Permintaan akses folder bersama baru",
      description: "Karyawan baru membutuhkan akses ke folder bersama di network drive.",
      status: "Pending",
      person_in_charge: "Maya Sari",
      resolved_date: null,
      rootcause_solution: null,
      created_at: "2025-06-22T16:00:00Z",
      location: "Manado",
    },
    {
      id: "T12358",
      no_ticket: "INCP0297454",
      title: "Bug pada fitur pencarian dokumen",
      description: "Fitur pencarian dokumen tidak menampilkan hasil yang akurat.",
      status: "Resolved",
      person_in_charge: "Nia Kurnia",
      resolved_date: "2025-06-24T10:00:00Z",
      rootcause_solution: "Perbaikan bug pada query database pencarian.",
      created_at: "2025-06-23T11:00:00Z",
      location: "Padang",
    },
    {
      id: "T12359",
      no_ticket: "INCP0297455",
      title: "Permintaan instalasi printer baru di kantor cabang",
      description: "Kantor cabang baru membutuhkan instalasi printer jaringan.",
      status: "Closed",
      person_in_charge: "Oscar Pratama",
      resolved_date: "2025-06-25T13:00:00Z",
      rootcause_solution: "Instalasi dan konfigurasi printer berhasil.",
      created_at: "2025-06-24T09:00:00Z",
      location: "Pekanbaru",
    },
    {
      id: "T12360",
      no_ticket: "INCP0297456",
      title: "Koneksi internet kantor sering terputus",
      description: "Pengguna melaporkan koneksi internet yang tidak stabil di kantor pusat.",
      status: "Active",
      person_in_charge: "Putri Rahayu",
      resolved_date: null,
      rootcause_solution: null,
      created_at: "2025-06-25T10:30:00Z",
      location: "Surabaya",
    },
    {
      id: "T12361",
      no_ticket: "INCP0297457",
      title: "Aplikasi keuangan crash saat input data",
      description: "Aplikasi keuangan sering crash ketika mencoba menginput data transaksi besar.",
      status: "Closed",
      person_in_charge: "Qasim Alif",
      resolved_date: null,
      rootcause_solution: null,
      created_at: "2025-06-26T11:00:00Z",
      location: "Jakarta",
    },
    {
      id: "T12362",
      no_ticket: "INCP0297458",
      title: "Permintaan penyesuaian hak akses sistem",
      description: "Tim marketing membutuhkan penyesuaian hak akses untuk tools campaign.",
      status: "Pending",
      person_in_charge: "Rina Oktavia",
      resolved_date: null,
      rootcause_solution: null,
      created_at: "2025-06-27T14:00:00Z",
      location: "Bandung",
    },
    {
      id: "T12363",
      no_ticket: "INCP0297459",
      title: "Monitor eksternal tidak terdeteksi",
      description: "Pengguna tidak dapat menghubungkan monitor eksternal ke laptop kantor.",
      status: "Resolved",
      person_in_charge: "Santi Dewi",
      resolved_date: "2025-06-28T09:00:00Z",
      rootcause_solution: "Instalasi driver grafis terbaru dan konfigurasi ulang tampilan.",
      created_at: "2025-06-28T08:00:00Z",
      location: "Yogyakarta",
    },
    {
      id: "T12364",
      no_ticket: "INCP0297460",
      title: "Permintaan backup data proyek lama",
      description: "Tim developer membutuhkan backup data dari proyek lama yang sudah diarsipkan.",
      status: "Closed",
      person_in_charge: "Taufiq Hidayat",
      resolved_date: "2025-06-29T11:00:00Z",
      rootcause_solution: "Proses backup data selesai dan diverifikasi.",
      created_at: "2025-06-29T10:00:00Z",
      location: "Medan",
    },
  ] as const;

  return ticketsData as unknown as Ticket[];
}

// app/dashboard/_lib/dashboard-data.ts
// ... (impor TICKET_STATUSES, definisi Ticket, getDashboardData)

// --- Tambahkan fungsi untuk data chart ---
export async function getTicketTrendsData() {
  await new Promise(resolve => setTimeout(resolve, 600)); // Simulasi delay

  return {
    categories: ["Jan 2025", "Feb 2025", "Mar 2025", "Apr 2025", "Mei 2025", "Jun 2025"],
    series: [
      {
        name: "Tiket Aktif",
        data: [50, 45, 60, 55, 70, 65],
        backgroundColor: 'rgba(255, 99, 132, 0.6)', // Contoh warna merah transparan
      },
      {
        name: "Tiket Pending",
        data: [20, 15, 25, 10, 30, 20],
        backgroundColor: 'rgba(54, 162, 235, 0.6)', // Contoh warna biru transparan
      },
      {
        name: "Tiket Selesai",
        data: [80, 90, 75, 100, 95, 110],
        backgroundColor: 'rgba(75, 192, 192, 0.6)', // Contoh warna hijau transparan
      },
      {
        name: "Tiket Ditutup",
        data: [10, 5, 8, 12, 7, 9],
        backgroundColor: 'rgba(153, 102, 255, 0.6)', // Contoh warna ungu transparan
      }
    ]
  };
}

export async function getTicketStatusSummary() {
  await new Promise(resolve => setTimeout(resolve, 800));

  // --- KUNCI PERBAIKAN: Gunakan dummy data statis langsung di sini ---
  const labels: string[] = ["Active", "Pending", "Resolved", "Closed"];
  const data: number[] = [300, 200, 150, 400, 200]; // Contoh jumlah tiket untuk setiap status

  // Palet warna yang bisa Anda sesuaikan
  const backgroundColors: string[] = [
    'rgba(255, 159, 64, 0.8)',   // Active (Oranye)
    'rgba(54, 162, 235, 0.8)',   // In Progress (Biru)
    'rgba(255, 206, 86, 0.8)',   // Pending (Kuning)
    'rgba(75, 192, 192, 0.8)',   // Resolved (Hijau Kebiruan)
    'rgba(153, 102, 255, 0.8)',  // Closed (Ungu)
  ];
  const borderColors: string[] = [
    'rgba(255, 159, 64, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(54, 162, 235, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
  ];

  return {
    labels: labels,
    data: data,
    backgroundColor: backgroundColors,
    borderColor: borderColors,
  };
}