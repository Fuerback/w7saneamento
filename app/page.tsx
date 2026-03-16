"use client";

import Image from "next/image";
import { useState } from "react";

const suppliers = [
  {
    name: "ASPERBRAS",
    url: "https://www.asperbrastuboseconexoes.com.br/",
    description: "Soluções completas em PEAD e PVC tubos, conexões e válvulas para redes de abastecimento, esgotamento sanitário e Poços de Visita (PV) Rotomoldados.",
    pdfs: [
      { file: "catalogo completo asperbras.pdf", label: "Catálogo Completo" },
      { file: "catalogo saneamento rotomoldagem.pdf", label: "Saneamento Rotomoldagem" },
      { file: "CATÁLAGO_PEAD.pdf", label: "PEAD" },
      { file: "ASPERBRAS - Lâmina Linha Keeper.pdf", label: "Lâmina Linha Keeper" },
      { file: "catalogo saneamento tubos.pdf", label: "Saneamento Tubos" },
      { file: "CATALOGO ASPERBRAS PREDIAL.pdf", label: "Predial" },
      { file: "ASPERBRAS - Lâmina Serve Festa.pdf", label: "Lâmina Serve Festa" },
      { file: "Apresentação Linha Keeper ASPERBRAS 2025.pdf", label: "Linha Keeper" },
    ],
  },
  {
    name: "CIMFLEX",
    url: "https://www.cimflex.com.br/",
    description: "Especialista em PEAD Corrugado, atendendo setores de saneamento, drenagem, mineração, energia, telecomunicações e indústria.",
    pdfs: [
      { file: "catalogo_Tuboseconexões_2025-2.pdf_compressed.pdf", label: "Tubos e Conexões" },
      { file: "catalogo_atualizado_Ecodren_2025-1.pdf_compressed (1).pdf", label: "Ecodren" },
      { file: "catalogo_ecosan_atual_2025-1.pdf_compressed.pdf", label: "Ecosan" },
      { file: "catalogo_dutos_eletrodutos_atualizado_2025-.pdf", label: "Dutos e Eletrodutos 2025" },
    ],
  },
  {
    name: "R2SAN",
    url: "https://www.r2san.com.br/",
    description: "Uma das maiores importadoras do Brasil, fornecendo tubos e válvulas em Ferro Fundido com alta durabilidade.",
    pdfs: [
      { file: "Catálogo R2 San - PEAD Compressão_251028_144107.pdf", label: "PEAD Compressão" },
      { file: "Catálogo R2 San - PEAD Eletro e Termofusão_251028_144142.pdf", label: "PEAD Eletro e Termofusão" },
      { file: "Catálogo R2 San - Válvulas - 2024_251028_143954.pdf", label: "Válvulas" },
      { file: "Catálogo R2 San - Tubos - 2024_251028_144031.pdf", label: "Tubos" },
    ],
  },
];

function formatPdfName(filename: string): string {
  return filename
    .replace(/\.pdf(_compressed)?(\s*\(\d+\))?\.pdf$/i, ".pdf")
    .replace(/\.pdf$/i, "")
    .replace(/_\d{6}_\d{6}$/, "")
    .replace(/_/g, " ")
    .trim();
}

function SupplierCard({ supplier }: { supplier: (typeof suppliers)[0] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
      <div className="p-6">
        <h3 className="text-2xl font-bold text-[#0D3280] mb-2">{supplier.name}</h3>
        <p className="text-gray-500 text-sm mb-4">{supplier.description}</p>
        <div className="flex gap-3 flex-wrap">
          <a
            href={supplier.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#0D3280] hover:bg-[#081F55] text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Visitar site
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="inline-flex items-center gap-2 border border-[#0D3280] text-[#0D3280] hover:bg-[#0D3280] hover:text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
            </svg>
            {open ? "Ocultar catálogos" : `Ver catálogos (${supplier.pdfs.length})`}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-gray-100 bg-gray-50 p-4">
          <ul className="space-y-2">
            {supplier.pdfs.map((entry) => (
              <li key={entry.file}>
                <a
                  href={`https://pub-8b048410db364e08a99484df0d21fd61.r2.dev/${supplier.name}/${encodeURIComponent(entry.file)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-gray-700 hover:text-[#0D3280] group transition-colors cursor-pointer"
                >
                  <span className="flex-shrink-0 w-8 h-8 bg-[#0D3280]/10 group-hover:bg-[#0D3280]/20 rounded-lg flex items-center justify-center transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#0D3280]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </span>
                  <span className="group-hover:underline">{entry.label ?? formatPdfName(entry.file)}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

const promoProducts = [
  {
    image: "/files/popup/RESERVATORIO-POLI.png",
    alt: "Reservatório Poli",
    pdf: "https://pub-8b048410db364e08a99484df0d21fd61.r2.dev/ASPERBRAS/ASPERBRAS%20-%20L%C3%A2mina%20Serve%20Festa.pdf",
  },
  {
    image: "/files/popup/RESERVATORIO-KEEPER.png",
    alt: "Reservatório Keeper",
    pdf: "https://pub-8b048410db364e08a99484df0d21fd61.r2.dev/ASPERBRAS/ASPERBRAS%20-%20L%C3%A2mina%20Linha%20Keeper.pdf",
  },
];

function PromoPopup({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={onClose}>
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-6" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors cursor-pointer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 className="text-center text-[#0D3280] font-bold text-lg mb-1">Novidades ASPERBRAS</h2>
        <p className="text-center text-gray-500 text-sm mb-5">Clique em um produto para ver o catálogo completo</p>
        <div className="grid grid-cols-2 gap-4">
          {promoProducts.map((product) => (
            <a
              key={product.alt}
              href={product.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl overflow-hidden border border-gray-100 hover:border-[#0D3280]/40 shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              <Image
                src={product.image}
                alt={product.alt}
                width={400}
                height={300}
                className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-200"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<"inicio" | "quem-somos" | "catalogos" | "contato">("inicio");
  const [showPopup, setShowPopup] = useState(true);

  return (
    <div className="min-h-screen bg-[#F4F7FC] flex flex-col">
      {showPopup && <PromoPopup onClose={() => setShowPopup(false)} />}
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white border-b border-[#0D3280]/20 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <button onClick={() => setActiveTab("inicio")} className="flex items-center cursor-pointer">
            <Image
              src="/files/logo-blue.png"
              alt="W7 Saneamento"
              width={200}
              height={90}
              priority
              className="object-contain h-22 w-auto"
            />
          </button>
          <div className="flex gap-1">
            <button
              onClick={() => setActiveTab("inicio")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${activeTab === "inicio"
                ? "bg-[#0D3280] text-white"
                : "text-[#0D3280] hover:bg-[#0D3280]/10"
                }`}
            >
              Início
            </button>
            <button
              onClick={() => setActiveTab("quem-somos")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${activeTab === "quem-somos"
                ? "bg-[#0D3280] text-white"
                : "text-[#0D3280] hover:bg-[#0D3280]/10"
                }`}
            >
              Quem Somos
            </button>
            <button
              onClick={() => setActiveTab("catalogos")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${activeTab === "catalogos"
                ? "bg-[#0D3280] text-white"
                : "text-[#0D3280] hover:bg-[#0D3280]/10"
                }`}
            >
              Catálogos
            </button>
            <button
              onClick={() => setActiveTab("contato")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${activeTab === "contato"
                ? "bg-[#0D3280] text-white"
                : "text-[#0D3280] hover:bg-[#0D3280]/10"
                }`}
            >
              Contato
            </button>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      {activeTab === "inicio" && (
        <main>
          {/* Hero */}
          <section className="bg-[#0D3280] text-white py-10 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Image
                src="/files/logo-white.png"
                alt="W7 Saneamento"
                width={240}
                height={110}
                priority
                className="mx-auto mb-3 object-contain"
              />
              <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
                Experiência que Gera Confiança
              </h1>
              <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
                <button
                  onClick={() => setActiveTab("quem-somos")}
                  className="inline-block border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
                >
                  Quem Somos
                </button>
                <button
                  onClick={() => setActiveTab("catalogos")}
                  className="inline-block bg-white text-[#0D3280] font-semibold px-8 py-3 rounded-full hover:bg-blue-50 transition-colors cursor-pointer"
                >
                  Ver catálogos
                </button>
                <button
                  onClick={() => setActiveTab("contato")}
                  className="inline-block border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
                >
                  Contato
                </button>
              </div>
            </div>
          </section>

          {/* Clientes */}
          <section className="py-12 px-4 bg-white">
            <div className="max-w-5xl mx-auto">
              <p className="text-center text-sm font-semibold uppercase tracking-widest text-gray-400 mb-8">Empresas que confiam na W7 Saneamento</p>
              <div className="flex flex-wrap items-center justify-center gap-10">
                <Image src="/files/clientes/bhatel.jpg" alt="Bhatel" width={120} height={60} className="object-contain grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100" />
                <Image src="/files/clientes/Gomes.jpeg" alt="Gomes" width={120} height={60} className="object-contain grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100" />
                <Image src="/files/clientes/hidroluna.jpg" alt="Hidroluna" width={120} height={60} className="object-contain grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100" />
                <Image src="/files/clientes/hidrotel.jpg" alt="Hidrotel" width={120} height={60} className="object-contain grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100" />
                <Image src="/files/clientes/viadagua.jpg" alt="Via d'Água" width={120} height={60} className="object-contain grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100" />
              </div>
            </div>
          </section>

          {/* ARPEBRAS - TUBOS E CONEXOES */}
          <section className="py-12 px-4 bg-white">
            <div className="max-w-5xl mx-auto">
              <div className="flex justify-center mb-6">
                <Image src="/files/INFRA.png" alt="Tabela de Infraestrutura" width={800} height={400} className="rounded-2xl shadow-md object-contain w-full max-w-3xl" />
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="https://docs.google.com/spreadsheets/d/1XJEBC6zKNPgV8J8A8ivIp7uDM8Y9u3G4/edit?gid=968244646#gid=968244646"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#0D3280] hover:bg-[#081F55] text-white text-sm font-medium px-6 py-3 rounded-lg transition-colors cursor-pointer"
                >
                  Listagem Tubos
                </a>
                <a
                  href="https://docs.google.com/spreadsheets/d/1q9pAQdRwDdGRx7e1VjWOvdXDiQ6DLVRC/edit?gid=56373896#gid=56373896"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#0D3280] hover:bg-[#081F55] text-white text-sm font-medium px-6 py-3 rounded-lg transition-colors cursor-pointer"
                >
                  Listagem Conexões
                </a>
                <button
                  onClick={() => setActiveTab("catalogos")}
                  className="inline-flex items-center gap-2 border border-[#0D3280] text-[#0D3280] hover:bg-[#0D3280] hover:text-white text-sm font-medium px-6 py-3 rounded-lg transition-colors cursor-pointer"
                >
                  Catálogos
                </button>
              </div>
            </div>
          </section>

          {/* ASSEBRAS - PEAD */}
          <section className="py-12 px-4 bg-white">
            <div className="max-w-5xl mx-auto">
              <div className="flex justify-center mb-6">
                <Image src="/files/PEAD.png" alt="PEAD" width={800} height={400} className="rounded-2xl shadow-md object-contain w-full max-w-3xl" />
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={() => setActiveTab("catalogos")}
                  className="inline-flex items-center gap-2 border border-[#0D3280] text-[#0D3280] hover:bg-[#0D3280] hover:text-white text-sm font-medium px-6 py-3 rounded-lg transition-colors cursor-pointer"
                >
                  Catálogos
                </button>
              </div>
            </div>
          </section>

          {/* PV */}
          <section className="py-12 px-4 bg-white">
            <div className="max-w-5xl mx-auto">
              <div className="flex justify-center mb-6">
                <Image src="/files/PV.png" alt="PV" width={800} height={400} className="rounded-2xl shadow-md object-contain w-full max-w-3xl" />
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={() => setActiveTab("catalogos")}
                  className="inline-flex items-center gap-2 border border-[#0D3280] text-[#0D3280] hover:bg-[#0D3280] hover:text-white text-sm font-medium px-6 py-3 rounded-lg transition-colors cursor-pointer"
                >
                  Catálogos
                </button>
              </div>
            </div>
          </section>

          {/* Ferro Fundido */}
          <section className="py-12 px-4 bg-white">
            <div className="max-w-5xl mx-auto">
              <div className="flex justify-center mb-6">
                <Image src="/files/FERROFUNDIDO.png" alt="Ferro Fundido" width={800} height={400} className="rounded-2xl shadow-md object-contain w-full max-w-3xl" />
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="https://docs.google.com/spreadsheets/d/1r25RLZjA0SAUYZWZXexUPqSCzI6KAZHp/edit?gid=171716005#gid=171716005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#0D3280] hover:bg-[#081F55] text-white text-sm font-medium px-6 py-3 rounded-lg transition-colors cursor-pointer"
                >
                  Listagem Válvulas
                </a>
                <a
                  href="https://docs.google.com/spreadsheets/d/144zELHkt19HCjvWmFdGcJS6yz1py--j4/edit?gid=1277210385#gid=1277210385"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#0D3280] hover:bg-[#081F55] text-white text-sm font-medium px-6 py-3 rounded-lg transition-colors cursor-pointer"
                >
                  Listagem Tubos
                </a>
                <a
                  href="https://docs.google.com/spreadsheets/d/1SXOqC_1dXOFlPsIyFeH6_7l18rZx4px9/edit?gid=1626313609#gid=1626313609"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#0D3280] hover:bg-[#081F55] text-white text-sm font-medium px-6 py-3 rounded-lg transition-colors cursor-pointer"
                >
                  Listagem Conexões
                </a>
                <button
                  onClick={() => setActiveTab("catalogos")}
                  className="inline-flex items-center gap-2 border border-[#0D3280] text-[#0D3280] hover:bg-[#0D3280] hover:text-white text-sm font-medium px-6 py-3 rounded-lg transition-colors cursor-pointer"
                >
                  Catálogos
                </button>
              </div>
            </div>
          </section>

          {/* Drenagem */}
          <section className="py-12 px-4 bg-white">
            <div className="max-w-5xl mx-auto">
              <div className="flex justify-center mb-6">
                <Image src="/files/DRENAGEM.png" alt="Drenagem" width={800} height={400} className="rounded-2xl shadow-md object-contain w-full max-w-3xl" />
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={() => setActiveTab("catalogos")}
                  className="inline-flex items-center gap-2 border border-[#0D3280] text-[#0D3280] hover:bg-[#0D3280] hover:text-white text-sm font-medium px-6 py-3 rounded-lg transition-colors cursor-pointer"
                >
                  Catálogos
                </button>
              </div>
            </div>
          </section>

          {/* Nosso Portfólio */}
          <section className="py-16 px-4 bg-white">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-[#0D3280] mb-8 text-center">Nosso Portfólio</h2>
              <p className="text-gray-500 text-center mb-10">Trabalhamos exclusivamente com fabricantes líderes para garantir a máxima performance em cada obra.</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-[#F4F7FC] rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-[#0D3280] mb-3">ASPERBRAS</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">Soluções completas em <strong>PEAD</strong> e <strong>PVC</strong> tubos, conexões e válvulas para redes de abastecimento, esgotamento sanitário e Poços de Visita (PV) Rotomoldados.</p>
                </div>
                <div className="bg-[#F4F7FC] rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-[#0D3280] mb-3">CIMFLEX</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">Especialista em <strong>PEAD Corrugado</strong>, atendendo setores de saneamento, drenagem, mineração, energia, telecomunicações e indústria.</p>
                </div>
                <div className="bg-[#F4F7FC] rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-[#0D3280] mb-3">R2SAN</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">Uma das maiores importadoras do Brasil, fornecendo <strong>tubos e válvulas em Ferro Fundido</strong> com alta durabilidade.</p>
                </div>
              </div>
              <div className="text-center mt-10">
                <button
                  onClick={() => setActiveTab("catalogos")}
                  className="inline-block bg-[#0D3280] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#081F55] transition-colors cursor-pointer"
                >
                  Ver catálogos
                </button>
              </div>
            </div>
          </section>


          {/* Como funcionamos */}
          <section className="py-16 px-4 bg-white">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-[#0D3280] mb-12 text-center">Como trabalhamos</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                <div className="text-center px-4">
                  <div className="w-16 h-16 bg-[#0D3280]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#0D3280]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-[#0D3280] mb-2">Distribuição</h3>
                  <p className="text-gray-500 text-sm">Amplo portfólio de produtos para obras de saneamento, com pronta entrega e atendimento a todo o Brasil.</p>
                </div>
                <div className="text-center px-4">
                  <div className="w-16 h-16 bg-[#0D3280]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#0D3280]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-[#0D3280] mb-2">Qualidade</h3>
                  <p className="text-gray-500 text-sm">Trabalhamos apenas com fabricantes certificados, garantindo produtos com total conformidade às normas técnicas.</p>
                </div>
                <div className="text-center px-4">
                  <div className="w-16 h-16 bg-[#0D3280]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#0D3280]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-[#0D3280] mb-2">Atendimento</h3>
                  <p className="text-gray-500 text-sm">Suporte técnico especializado de quem conhece o canteiro de obra, orientando na especificação e escolha dos produtos certos para cada projeto.</p>
                </div>
              </div>
            </div>
          </section>
        </main>
      )}

      {/* Quem Somos Section */}
      {activeTab === "quem-somos" && (
        <main className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0D3280] mb-6 text-center">Quem Somos</h2>
            <div className="bg-white rounded-2xl shadow-sm p-8 text-gray-600 leading-relaxed space-y-4 text-lg">
              <p>
                A <strong className="text-[#0D3280]">W7 Saneamento</strong> nasceu de <strong className="text-[#0D3280]">15 anos de expertise em infraestrutura de saneamento</strong>, com uma trajetória consolidada no topo do mercado mundial de PVC. Ao longo dessa jornada, construímos um histórico de excelência atendendo aos mais exigentes clientes do Brasil, como <strong className="text-[#0D3280]">Sanepar</strong>, <strong className="text-[#0D3280]">Casan</strong>, <strong className="text-[#0D3280]">Águas de Joinville</strong> e diversos <strong className="text-[#0D3280]">Samaes</strong> em Santa Catarina e no Paraná, além de grandes empreiteiras e revendas nacionais.
              </p>
              <p>
                Somos especialistas na distribuição de materiais para saneamento básico, atuando como parceiros estratégicos de construtoras, empreiteiras, prefeituras, companhias de saneamento e profissionais especializados em todo o território brasileiro.
              </p>
            </div>

            <section className="mt-10 bg-[#0D3280] text-white rounded-2xl py-12 px-8 text-center">
              <h2 className="text-3xl font-bold mb-6">Nosso Compromisso</h2>
              <p className="text-lg sm:text-xl text-blue-200 leading-relaxed max-w-3xl mx-auto">
                Nossa missão é viabilizar projetos de infraestrutura através do fornecimento de produtos de altíssima qualidade, unindo agilidade logística e suporte técnico especializado de quem conhece o canteiro de obra e as necessidades do campo.
              </p>
            </section>

            <section className="mt-10">
              <h2 className="text-3xl font-bold text-[#0D3280] mb-6 text-center">Nossa Missão</h2>
              <div className="bg-white rounded-2xl shadow-sm p-8 text-gray-600 leading-relaxed text-lg text-center">
                <p>
                  Nossa missão é impulsionar o setor de saneamento através de um compromisso inegociável com a agilidade. Unimos produtos de alta performance ao suporte técnico de quem entende o campo, garantindo que cada demanda seja resolvida com o profissionalismo e a velocidade que a obra exige.
                </p>
              </div>
            </section>
          </div>
        </main>
      )}

      {/* Contato Section */}
      {activeTab === "contato" && (
        <main className="py-12 px-4 flex-1">
          <div className="max-w-xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0D3280] mb-8 text-center">Contato</h2>
            <div className="bg-white rounded-2xl shadow-md p-8 space-y-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">Nome</p>
                <p className="text-lg font-medium text-gray-800">Wilson Neves Filho</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">E-mail</p>
                <a
                  href="mailto:comercial@w7saneamento.com.br"
                  className="text-lg font-medium text-[#0D3280] hover:underline cursor-pointer"
                >
                  comercial@w7saneamento.com.br
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">WhatsApp</p>
                <a
                  href="https://wa.me/5548992250207"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-lg font-medium text-gray-800 hover:text-[#25D366] transition-colors cursor-pointer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-6 h-6 fill-[#25D366]">
                    <path d="M16 2C8.268 2 2 8.268 2 16c0 2.478.677 4.797 1.852 6.786L2 30l7.407-1.82A13.93 13.93 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.6a11.56 11.56 0 01-5.885-1.608l-.422-.25-4.397 1.08 1.112-4.277-.274-.44A11.56 11.56 0 014.4 16C4.4 9.592 9.592 4.4 16 4.4S27.6 9.592 27.6 16 22.408 27.6 16 27.6zm6.344-8.656c-.348-.174-2.058-1.014-2.378-1.13-.32-.116-.552-.174-.784.174-.232.348-.9 1.13-1.104 1.362-.203.232-.406.26-.754.086-.348-.174-1.47-.542-2.8-1.726-1.034-.922-1.732-2.06-1.935-2.408-.203-.348-.022-.536.153-.71.157-.155.348-.406.522-.61.174-.203.232-.348.348-.58.116-.232.058-.436-.029-.61-.087-.174-.784-1.89-1.074-2.588-.283-.68-.57-.587-.784-.598l-.668-.012c-.232 0-.61.087-.928.436-.318.348-1.218 1.19-1.218 2.9s1.247 3.363 1.42 3.596c.174.232 2.455 3.748 5.95 5.253.832.36 1.48.574 1.986.735.834.266 1.594.228 2.194.138.669-.1 2.058-.842 2.348-1.655.29-.814.29-1.512.203-1.655-.087-.145-.319-.232-.667-.406z" />
                  </svg>
                  +55 48 99225-0207
                </a>
              </div>
            </div>
          </div>
        </main>
      )}

      {/* Catálogos Section */}
      {activeTab === "catalogos" && (
        <main className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0D3280] mb-2">Catálogos e Fornecedores</h2>
            <p className="text-gray-500 mb-8">Acesse o site de cada fornecedor ou faça o download dos catálogos técnicos.</p>
            <div className="space-y-6">
              {suppliers.map((supplier) => (
                <SupplierCard key={supplier.name} supplier={supplier} />
              ))}
            </div>
          </div>
        </main>
      )}

      {/* Footer */}
      <footer className="bg-[#0D3280] text-blue-200 text-center text-sm py-6 mt-12">
        © {new Date().getFullYear()} W7 Saneamento. Todos os direitos reservados.
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/554892250207"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco pelo WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#1ebe5d] rounded-full shadow-lg flex items-center justify-center transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-8 h-8 fill-white">
          <path d="M16 2C8.268 2 2 8.268 2 16c0 2.478.677 4.797 1.852 6.786L2 30l7.407-1.82A13.93 13.93 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.6a11.56 11.56 0 01-5.885-1.608l-.422-.25-4.397 1.08 1.112-4.277-.274-.44A11.56 11.56 0 014.4 16C4.4 9.592 9.592 4.4 16 4.4S27.6 9.592 27.6 16 22.408 27.6 16 27.6zm6.344-8.656c-.348-.174-2.058-1.014-2.378-1.13-.32-.116-.552-.174-.784.174-.232.348-.9 1.13-1.104 1.362-.203.232-.406.26-.754.086-.348-.174-1.47-.542-2.8-1.726-1.034-.922-1.732-2.06-1.935-2.408-.203-.348-.022-.536.153-.71.157-.155.348-.406.522-.61.174-.203.232-.348.348-.58.116-.232.058-.436-.029-.61-.087-.174-.784-1.89-1.074-2.588-.283-.68-.57-.587-.784-.598l-.668-.012c-.232 0-.61.087-.928.436-.318.348-1.218 1.19-1.218 2.9s1.247 3.363 1.42 3.596c.174.232 2.455 3.748 5.95 5.253.832.36 1.48.574 1.986.735.834.266 1.594.228 2.194.138.669-.1 2.058-.842 2.348-1.655.29-.814.29-1.512.203-1.655-.087-.145-.319-.232-.667-.406z" />
        </svg>
      </a>
    </div>
  );
}
