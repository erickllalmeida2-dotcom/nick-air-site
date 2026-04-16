export default function Home() {
  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f5f7fb",
        color: "#111",
        margin: 0,
        padding: 0,
      }}
    >
      <header
        style={{
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #e5e7eb",
          padding: "16px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <div>
            <div style={{ fontSize: "28px", fontWeight: "bold" }}>NickAir</div>
            <div style={{ fontSize: "14px", color: "#555" }}>
              Climatização em Sorocaba
            </div>
          </div>

          <nav style={{ display: "flex", gap: "18px", flexWrap: "wrap" }}>
            <a href="#home" style={{ textDecoration: "none", color: "#111", fontWeight: "bold" }}>
              Home
            </a>
            <a href="#sobre" style={{ textDecoration: "none", color: "#111", fontWeight: "bold" }}>
              Sobre a NickAir
            </a>
            <a href="#servicos" style={{ textDecoration: "none", color: "#111", fontWeight: "bold" }}>
              Serviços
            </a>
            <a href="#contato" style={{ textDecoration: "none", color: "#111", fontWeight: "bold" }}>
              Contato
            </a>
          </nav>
        </div>
      </header>

      <section
        id="home"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "50px 20px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "30px",
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-block",
                backgroundColor: "#e8f0ff",
                color: "#0f4aa3",
                padding: "8px 14px",
                borderRadius: "999px",
                fontSize: "13px",
                fontWeight: "bold",
                marginBottom: "18px",
              }}
            >
              Atendimento profissional em Sorocaba e região
            </div>

            <h1
              style={{
                fontSize: "44px",
                lineHeight: 1.15,
                marginBottom: "16px",
              }}
            >
              Instalação, manutenção e higienização de ar-condicionado com
              atendimento profissional.
            </h1>

            <p
              style={{
                fontSize: "18px",
                color: "#555",
                lineHeight: 1.7,
                marginBottom: "26px",
                maxWidth: "620px",
              }}
            >
              Cuidamos do ar para você cuidar do resto. Serviço com atenção aos
              detalhes, acabamento limpo, diagnóstico honesto e foco total na
              sua satisfação.
            </p>

            <div
              style={{
                display: "flex",
                gap: "14px",
                flexWrap: "wrap",
              }}
            >
              <a
                href="https://wa.me/5515991327654"
                style={{
                  backgroundColor: "#111",
                  color: "#fff",
                  padding: "14px 24px",
                  borderRadius: "12px",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                Conversar no WhatsApp
              </a>

              <a
                href="https://search.google.com/local/writereview?placeid=ChIJ45WkJlPI44oRxJs2c5MXewE"
                target="_blank"
                rel="noreferrer"
                style={{
                  backgroundColor: "#0f4aa3",
                  color: "#fff",
                  padding: "14px 24px",
                  borderRadius: "12px",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                Avalie no Google
              </a>
            </div>
          </div>

          <div>
            <img
              src="/images/capa.jpg"
              alt="Capa NickAir"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "contain",
                borderRadius: "22px",
                display: "block",
                boxShadow: "0 10px 28px rgba(0,0,0,0.12)",
              }}
            />
          </div>
        </div>
      </section>

      <section
        id="sobre"
        style={{
          backgroundColor: "#ffffff",
          padding: "65px 20px",
          borderTop: "1px solid #e5e7eb",
          borderBottom: "1px solid #e5e7eb",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <h2 style={{ fontSize: "36px", marginBottom: "18px", textAlign: "center" }}>
            Sobre a NickAir
          </h2>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.7,
              color: "#555",
              textAlign: "center",
              maxWidth: "900px",
              margin: "0 auto 30px",
            }}
          >
          <p>
  A NickAir é especialista em instalação, higienização, manutenção e infraestrutura de ar-condicionado em Sorocaba e região, atendendo clientes residenciais e comerciais com rapidez e profissionalismo.
</p>

<p>
  Nosso compromisso é simples: entregar um serviço bem feito, com acabamento limpo, diagnóstico preciso e total transparência. Aqui você não corre risco de pagar por algo desnecessário — indicamos sempre a melhor solução para o seu caso.
</p>

<p>
  Trabalhamos para que seu equipamento funcione com máxima eficiência, proporcionando conforto, economia e durabilidade.
</p>

<p>
  Se você busca um atendimento confiável, ágil e com resultado de verdade, a NickAir está pronta para te atender.
</p>
<a
  href="https://wa.me/5515991327654"
  style={{
    display: "inline-block",
    marginTop: "20px",
    padding: "12px 22px",
    backgroundColor: "#25D366",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: "none",
    fontWeight: "bold",
  }}
>
  Solicitar orçamento no WhatsApp
</a>
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "16px",
            }}
          >
            <div style={cardInfo}>Atendimento em Sorocaba e região</div>
            <div style={cardInfo}>Serviço limpo e bem acabado</div>
            <div style={cardInfo}>Atendimento rápido pelo WhatsApp</div>
            <div style={cardInfo}>Orientação honesta e transparente</div>
            <div style={cardInfo}>Atendimento residencial e comercial</div>
            <div style={cardInfo}>Compromisso com qualidade e confiança</div>
          </div>
        </div>
      </section>

      <section
        id="servicos"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "65px 20px",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "34px" }}>
          <h2 style={{ fontSize: "36px", marginBottom: "12px" }}>Serviços</h2>
          <p
            style={{
              color: "#555",
              fontSize: "18px",
              maxWidth: "780px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Soluções completas em climatização para quem busca conforto,
            confiança, agilidade e serviço bem executado.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          <div style={serviceCard}>
            <img src="/images/instalacao.jpg" alt="Instalação" style={serviceImg} />
            <div style={serviceBody}>
              <h3 style={serviceTitle}>Instalação de Ar-Condicionado</h3>
              <p style={serviceText}>
                Instalação residencial e comercial com acabamento limpo,
                segurança e atenção aos detalhes.
              </p>
            </div>
          </div>

          <div style={serviceCard}>
            <img src="/images/higienizacao.jpg" alt="Higienização" style={serviceImg} />
            <div style={serviceBody}>
              <h3 style={serviceTitle}>Higienização</h3>
              <p style={serviceText}>
                Limpeza técnica para melhorar a qualidade do ar, reduzir odores
                e manter o equipamento eficiente.
              </p>
            </div>
          </div>

          <div style={serviceCard}>
            <img src="/images/manutencao.jpg" alt="Manutenção" style={serviceImg} />
            <div style={serviceBody}>
              <h3 style={serviceTitle}>Manutenção</h3>
              <p style={serviceText}>
                Revisão preventiva e corretiva para evitar falhas e aumentar a
                vida útil do sistema.
              </p>
            </div>
          </div>

          <div style={serviceCard}>
            <img src="/images/infraestrutura.jpg" alt="Infraestrutura" style={serviceImg} />
            <div style={serviceBody}>
              <h3 style={serviceTitle}>Infraestrutura</h3>
              <p style={serviceText}>
                Preparação completa da estrutura para instalação com organização
                e acabamento profissional.
              </p>
            </div>
          </div>

          <div style={serviceCard}>
            <img src="/images/diagnostico.jpg" alt="Diagnóstico Técnico" style={serviceImg} />
            <div style={serviceBody}>
              <h3 style={serviceTitle}>Diagnóstico Técnico</h3>
              <p style={serviceText}>
                Análise técnica detalhada para identificar a origem do problema
                com mais precisão e transparência.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contato"
        style={{
          backgroundColor: "#111",
          color: "#fff",
          textAlign: "center",
          padding: "70px 20px",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "36px", marginBottom: "14px" }}>Contato</h2>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.7,
              color: "#d1d5db",
              marginBottom: "26px",
            }}
          >
            Fale com a NickAir pelo WhatsApp e solicite seu orçamento com mais
            rapidez e atendimento direto.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "14px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="https://wa.me/5515991327654"
              style={{
                display: "inline-block",
                backgroundColor: "#25D366",
                color: "#fff",
                padding: "14px 24px",
                borderRadius: "12px",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Conversar no WhatsApp
            </a>

            <a
              href="https://search.google.com/local/writereview?placeid=ChIJ45WkJlPI44oRxJs2c5MXewE"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-block",
                backgroundColor: "#0f4aa3",
                color: "#fff",
                padding: "14px 24px",
                borderRadius: "12px",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Avaliar no Google
            </a>
          </div>
        </div>
      </section>
<a
  href="https://wa.me/5515991327654"
  target="_blank"
  rel="noreferrer"
  style={{
    position: "fixed",
    bottom: "20px",
    right: "20px",
    backgroundColor: "#25D366",
    color: "#fff",
    padding: "14px 18px",
    borderRadius: "50px",
    textDecoration: "none",
    fontWeight: "bold",
    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
    zIndex: 9999,
    display: "flex",
    alignItems: "center",
    gap: "8px",
  }}
>
  💬 WhatsApp
</a>
    </main>
  );
}

const cardInfo = {
  backgroundColor: "#f5f7fb",
  border: "1px solid #e5e7eb",
  borderRadius: "16px",
  padding: "18px",
  fontWeight: "bold",
  textAlign: "center" as const,
};

const serviceCard = {
  backgroundColor: "#fff",
  borderRadius: "20px",
  overflow: "hidden" as const,
  boxShadow: "0 8px 22px rgba(0,0,0,0.08)",
  border: "1px solid #e5e7eb",
};

const serviceImg = {
  width: "100%",
  height: "230px",
  objectFit: "cover" as const,
  display: "block",
};

const serviceBody = {
  padding: "22px",
};

const serviceTitle = {
  marginTop: 0,
  marginBottom: "12px",
  fontSize: "24px",
};

const serviceText = {
  color: "#555",
  lineHeight: 1.7,
  margin: 0,
  fontSize: "16px",
};