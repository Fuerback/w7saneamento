"use client";

import Image from "next/image";
import { useState } from "react";

const suppliers = [
  {
    name: "ASPERBRAS",
    url: "https://www.asperbrastuboseconexoes.com.br/",
    description: "Tubos e conexões termoplásticos para saneamento e irrigação.",
    pdfs: [
      "catalogo completo asperbras.pdf",
      "catalogo saneamento rotomoldagem.pdf",
      "CATÁLAGO_PEAD.pdf",
      "ASPERBRAS - Lâmina Linha Keeper.pdf",
      "catalogo saneamento tubos.pdf",
      "CATALOGO ASPERBRAS PREDIAL.pdf",
      "ASPERBRAS - Lâmina Serve Festa.pdf",
      "Apresentação Linha Keeper ASPERBRAS 2025.pdf",
    ],
  },
  {
    name: "CIMFLEX",
    url: "https://www.cimflex.com.br/",
    description: "Soluções em tubos e conexões para drenagem e saneamento.",
    pdfs: [
      "catalogo_Tuboseconexões_2025-2.pdf_compressed.pdf",
      "catalogo_atualizado_Ecodren_2025-1.pdf_compressed (1).pdf",
      "catalogo_ecosan_atual_2025-1.pdf_compressed.pdf",
      "catalogo_dutos_eletrodutos_atualizado_2025-.pdf",
    ],
  },
  {
    name: "R2SAN",
    url: "https://www.r2san.com.br/",
    description: "Tubos, conexões e válvulas em PEAD para redes de distribuição.",
    pdfs: [
      "Catálogo R2 San - PEAD Compressão_251028_144107.pdf",
      "Catálogo R2 San - PEAD Eletro e Termofusão_251028_144142.pdf",
      "Catálogo R2 San - Válvulas - 2024_251028_143954.pdf",
      "Catálogo R2 San - Tubos - 2024_251028_144031.pdf",
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
            className="inline-flex items-center gap-2 bg-[#0D3280] hover:bg-[#081F55] text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Visitar site
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="inline-flex items-center gap-2 border border-[#0D3280] text-[#0D3280] hover:bg-[#0D3280] hover:text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
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
            {supplier.pdfs.map((pdf) => (
              <li key={pdf}>
                <a
                  href={`https://pub-8b048410db364e08a99484df0d21fd61.r2.dev/${supplier.name}/${encodeURIComponent(pdf)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-gray-700 hover:text-[#0D3280] group transition-colors"
                >
                  <span className="flex-shrink-0 w-8 h-8 bg-[#0D3280]/10 group-hover:bg-[#0D3280]/20 rounded-lg flex items-center justify-center transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#0D3280]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </span>
                  <span className="group-hover:underline">{formatPdfName(pdf)}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<"inicio" | "downloads">("inicio");

  return (
    <div className="min-h-screen bg-[#F4F7FC]">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white border-b border-[#0D3280]/20 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <button onClick={() => setActiveTab("inicio")} className="flex items-center">
            <Image
              src="/files/LOGO W 7.png"
              alt="W7 Saneamento"
              width={120}
              height={48}
              priority
              className="object-contain h-12 w-auto"
            />
          </button>
          <div className="flex gap-1">
            <button
              onClick={() => setActiveTab("inicio")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === "inicio"
                  ? "bg-[#0D3280] text-white"
                  : "text-[#0D3280] hover:bg-[#0D3280]/10"
              }`}
            >
              Início
            </button>
            <button
              onClick={() => setActiveTab("downloads")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === "downloads"
                  ? "bg-[#0D3280] text-white"
                  : "text-[#0D3280] hover:bg-[#0D3280]/10"
              }`}
            >
              Downloads
            </button>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      {activeTab === "inicio" && (
        <main>
          {/* Hero */}
          <section className="bg-[#0D3280] text-white py-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Image
                src="/files/LOGO W 7.png"
                alt="W7 Saneamento"
                width={180}
                height={72}
                priority
                className="mx-auto mb-8 object-contain"
              />
              <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
                Soluções completas em saneamento
              </h1>
              <p className="text-lg sm:text-xl text-blue-200 max-w-2xl mx-auto">
                Distribuidor autorizado de tubos, conexões e sistemas para redes de abastecimento e saneamento básico.
              </p>
              <button
                onClick={() => setActiveTab("downloads")}
                className="mt-8 inline-block bg-white text-[#0D3280] font-semibold px-8 py-3 rounded-full hover:bg-blue-50 transition-colors"
              >
                Ver catálogos
              </button>
            </div>
          </section>

          {/* Quem somos */}
          <section className="py-16 px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-[#0D3280] mb-6 text-center">Quem somos</h2>
              <div className="bg-white rounded-2xl shadow-sm p-8 text-gray-600 leading-relaxed space-y-4 text-lg">
                <p>
                  A <strong className="text-[#0D3280]">W7 Saneamento</strong> é uma empresa especializada na distribuição de materiais para saneamento básico, atendendo construtoras, prefeituras, empresas de saneamento e profissionais da área em todo o Brasil.
                </p>
                <p>
                  Trabalhamos com marcas líderes do mercado — ASPERBRAS, CIMFLEX e R2SAN — oferecendo tubos, conexões, válvulas e sistemas completos em PEAD, PVC e outros materiais de alta performance para redes de abastecimento de água, esgotamento sanitário e drenagem pluvial.
                </p>
                <p>
                  Nossa missão é garantir que cada projeto tenha acesso a produtos de qualidade, com agilidade no atendimento e suporte técnico especializado.
                </p>
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
                  <p className="text-gray-500 text-sm">Equipe técnica dedicada para orientar na especificação e escolha dos melhores produtos para cada projeto.</p>
                </div>
              </div>
            </div>
          </section>
        </main>
      )}

      {/* Downloads Section */}
      {activeTab === "downloads" && (
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
