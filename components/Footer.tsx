import React, { useState, useEffect } from 'react';
import { Instagram, X, FileText, Shield } from 'lucide-react';

const Footer: React.FC = () => {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeModal]);

  return (
    <>
      <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center gap-8">
             
             {/* Logo */}
             <div className="flex items-center">
                <img 
                  src="http://azul360parceiros.com.br/wp-content/uploads/2025/12/cropped-logo-2-scaled-1.png" 
                  alt="Azul 360º Parceiros" 
                  className="h-10 w-auto object-contain bg-white px-2 py-1 rounded-lg opacity-80 grayscale hover:grayscale-0 hover:opacity-100 transition-all"
                />
             </div>

             {/* Social Media */}
             <div className="flex gap-4">
                <a 
                  href="https://www.instagram.com/azul360.parceiros/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand hover:scale-110 transition-all duration-300 group"
                  aria-label="Instagram"
                >
                  <Instagram size={20} className="text-slate-300 group-hover:text-white" />
                </a>
             </div>

             {/* Legal Links */}
             <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
                <button 
                  onClick={() => setActiveModal('privacy')}
                  className="hover:text-white hover:underline transition-colors flex items-center gap-2"
                >
                  <Shield size={14} />
                  Política de Privacidade
                </button>
                <button 
                  onClick={() => setActiveModal('terms')}
                  className="hover:text-white hover:underline transition-colors flex items-center gap-2"
                >
                  <FileText size={14} />
                  Termos de Uso
                </button>
             </div>

             {/* Copyright */}
             <div className="text-slate-500 text-xs text-center font-medium max-w-lg">
                <p className="mb-2">Seus dados estão protegidos e serão utilizados apenas para contato comercial.</p>
                <p className="opacity-60">© 2025 Azul 360º Parceiros. Todos os direitos reservados.</p>
             </div>

          </div>
        </div>
      </footer>

      {/* Modal Backdrop */}
      {activeModal && (
        <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-3xl max-h-[85vh] flex flex-col shadow-2xl animate-fade-in relative">
            
            {/* Header */}
            <div className="p-6 border-b border-slate-100 flex justify-between items-center sticky top-0 bg-white rounded-t-2xl z-10">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                {activeModal === 'privacy' ? <Shield className="text-brand" /> : <FileText className="text-brand" />}
                {activeModal === 'privacy' ? 'Política de Privacidade' : 'Termos de Uso'}
              </h3>
              <button 
                onClick={() => setActiveModal(null)}
                className="p-2 rounded-full hover:bg-slate-100 transition-colors text-slate-500 hover:text-red-500"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content (Scrollable) */}
            <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar text-slate-600 text-sm leading-relaxed space-y-6">
              
              {activeModal === 'privacy' && (
                <>
                  <p>A sua privacidade é muito importante para nós. Esta Política de Privacidade descreve como coletamos, usamos, protegemos e compartilhamos suas informações pessoais ao acessar ou utilizar nossos serviços de vendas.</p>

                  <div>
                    <h4 className="font-bold text-slate-900 text-base mb-2">1. Coleta de Informações</h4>
                    <p className="mb-2">Coletamos informações pessoais quando você faz uma compra, se cadastra em nossa plataforma ou interage com nossos serviços. Essas informações podem incluir:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Nome</li>
                      <li>Endereço de e-mail</li>
                      <li>Número de telefone</li>
                      <li>Endereço de cobrança</li>
                      <li>Dados de pagamento (como informações de cartão de crédito)</li>
                      <li>Histórico de compras</li>
                    </ul>
                    <p className="mt-2">Além disso, podemos coletar informações automaticamente quando você utiliza nossos serviços, como seu endereço IP, dados de navegação, e interações com nossa página.</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 text-base mb-2">2. Uso das Informações</h4>
                    <p className="mb-2">Utilizamos as informações coletadas para:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Processar suas compras e pagamentos</li>
                      <li>Oferecer suporte ao cliente</li>
                      <li>Personalizar sua experiência de compra</li>
                      <li>Enviar informações sobre promoções, ofertas e atualizações de produtos (caso tenha consentido)</li>
                      <li>Melhorar nosso serviço e site com base nas suas preferências</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 text-base mb-2">3. Proteção de Dados</h4>
                    <p>Empregamos medidas de segurança técnicas e administrativas para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição. Isso inclui criptografia de dados e controles de acesso restritos.</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 text-base mb-2">4. Compartilhamento de Informações</h4>
                    <p>Não vendemos, alugamos ou trocamos suas informações pessoais com terceiros para fins de marketing. Podemos compartilhar suas informações com prestadores de serviços que nos ajudam a processar pagamentos, enviar produtos ou fornecer suporte. Esses prestadores de serviços têm acesso apenas às informações necessárias para realizar suas funções e estão obrigados a manter a confidencialidade.</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 text-base mb-2">5. Cookies e Tecnologias de Rastreamento</h4>
                    <p>Nosso site usa cookies e outras tecnologias de rastreamento para melhorar a navegação e a experiência do usuário. Você pode configurar seu navegador para recusar cookies, mas isso pode afetar sua experiência no site.</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 text-base mb-2">6. Seus Direitos</h4>
                    <p>Você tem o direito de acessar, corrigir ou excluir suas informações pessoais a qualquer momento. Se desejar, você também pode solicitar que deixemos de enviar comunicações de marketing, clicando no link de descadastro nos e-mails que enviamos ou entrando em contato conosco diretamente.</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 text-base mb-2">7. Alterações nesta Política</h4>
                    <p>Podemos atualizar nossa Política de Privacidade periodicamente. Qualquer alteração será publicada nesta página, com a data de atualização.</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 text-base mb-2">8. Contato</h4>
                    <p>Se você tiver alguma dúvida sobre nossa Política de Privacidade ou como tratamos suas informações pessoais, entre em contato conosco através do e-mail: <strong className="text-brand">contato@azul360parceiros.com.br</strong>.</p>
                  </div>
                </>
              )}

              {activeModal === 'terms' && (
                <>
                  <p>Estes Termos de Uso regulam o acesso e a utilização de nosso site e serviços. Ao acessar ou utilizar nossos serviços, você concorda em cumprir e estar vinculado a estes termos.</p>

                  <div>
                    <h4 className="font-bold text-slate-900 text-base mb-2">1. Aceitação dos Termos</h4>
                    <p>Ao utilizar nossos serviços de vendas, você concorda com os Termos de Uso e nossa Política de Privacidade. Se você não concorda com qualquer parte destes termos, não utilize nossos serviços.</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 text-base mb-2">2. Alterações nos Termos</h4>
                    <p>Podemos atualizar ou modificar estes Termos de Uso a qualquer momento, com ou sem aviso prévio. Recomendamos que você revise esta página periodicamente para estar ciente de quaisquer alterações. O uso contínuo de nossos serviços após a publicação de modificações constitui sua aceitação das mudanças.</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 text-base mb-2">3. Uso do Serviço</h4>
                    <p className="mb-2">Você concorda em usar nossos serviços de forma legal e conforme as leis e regulamentos aplicáveis. Ao acessar ou utilizar nossa plataforma, você concorda em não:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Utilizar nossos serviços para fins ilegais, fraudulentos ou prejudiciais.</li>
                      <li>Interferir no funcionamento do site ou na experiência de outros usuários.</li>
                      <li>Violar os direitos de propriedade intelectual, incluindo copyrights, marcas registradas e patentes.</li>
                      <li>Usar robôs, spiders ou outras tecnologias automáticas para acessar ou coletar dados do site.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 text-base mb-2">4. Cadastro de Usuário</h4>
                    <p>Para utilizar nossos serviços, você pode ser solicitado a criar uma conta. Você concorda em fornecer informações precisas, completas e atualizadas durante o processo de cadastro. É sua responsabilidade manter a confidencialidade das suas credenciais de acesso e de sua conta.</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 text-base mb-2">5. Produtos e Preços</h4>
                    <p>Os preços de nossos produtos são informados no site e podem ser alterados sem aviso prévio. Reservamo-nos o direito de corrigir erros de preço, descrição ou disponibilidade dos produtos, a qualquer momento.</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 text-base mb-2">6. Pagamento</h4>
                    <p>Ao realizar uma compra, você se compromete a pagar o valor total pelos produtos ou serviços adquiridos, incluindo impostos e taxas aplicáveis. Os pagamentos são processados por meio de terceiros, como gateways de pagamento, e a segurança das transações é uma prioridade.</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 text-base mb-2">7. Propriedade Intelectual</h4>
                    <p>Todos os conteúdos, incluindo textos, imagens, gráficos, logos e software disponíveis em nosso site são de nossa propriedade ou licenciados. Você concorda em não copiar, modificar, distribuir ou de qualquer outra forma infringir nossos direitos de propriedade intelectual.</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 text-base mb-2">8. Limitação de Responsabilidade</h4>
                    <p>Não nos responsabilizamos por qualquer dano indireto, acidental, especial ou consequente resultante do uso de nossos serviços ou da impossibilidade de usar nossos produtos. Em nenhum caso nossa responsabilidade ultrapassará o valor pago pelo cliente pela compra de um produto ou serviço.</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 text-base mb-2">9. Política de Cancelamento e Reembolso</h4>
                    <p>A política de cancelamento e reembolso de produtos ou serviços adquiridos será detalhada separadamente e deve ser consultada antes de qualquer compra. Em caso de dúvida, entre em contato conosco para obter informações claras sobre como proceder.</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 text-base mb-2">10. Privacidade</h4>
                    <p>A coleta e uso de seus dados pessoais estão sujeitos à nossa Política de Privacidade, que descreve como protegemos suas informações e como elas são usadas.</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 text-base mb-2">11. Força Maior</h4>
                    <p>Não seremos responsáveis por qualquer falha no cumprimento das obrigações estabelecidas neste contrato em caso de eventos de força maior, como desastres naturais, pandemias, ou outros eventos fora do nosso controle.</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 text-base mb-2">12. Legislação Aplicável</h4>
                    <p>Estes Termos de Uso são regidos pelas leis do Brasil. Qualquer disputa será resolvida no foro da cidade de São Paulo, estado de São Paulo.</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 text-base mb-2">13. Contato</h4>
                    <p>Se você tiver qualquer dúvida sobre nossos Termos de Uso, entre em contato conosco através do e-mail: <strong className="text-brand">contato@azul360parceiros.com.br</strong>.</p>
                  </div>
                </>
              )}

            </div>

            {/* Footer */}
            <div className="p-4 border-t border-slate-100 bg-slate-50 rounded-b-2xl flex justify-end">
              <button 
                onClick={() => setActiveModal(null)}
                className="px-6 py-2 bg-slate-200 text-slate-700 font-bold rounded-lg hover:bg-slate-300 transition-colors"
              >
                Fechar
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default Footer;