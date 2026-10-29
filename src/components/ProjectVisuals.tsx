import { motion } from 'motion/react'
import { Bot, Box, CheckCircle2, Database, FileText, Search, ShoppingBag, Sparkles, Tags, Upload, Users } from 'lucide-react'
import type { VisualType } from '../data/portfolio'

interface VisualProps {
  type: VisualType
  compact?: boolean
}

const FlowLine = ({ delay = 0 }: { delay?: number }) => (
  <span className="flow-line" aria-hidden="true">
    <motion.i animate={{ x: ['-20%', '560%'] }} transition={{ duration: 2.7, delay, repeat: Infinity, ease: 'linear' }} />
  </span>
)

function BobcatVisual() {
  const nodes = [
    { icon: Search, label: 'Discover', note: 'competitors' },
    { icon: Database, label: 'Ingest', note: 'catalogs' },
    { icon: Tags, label: 'Match', note: 'part data' },
    { icon: Sparkles, label: 'Enrich', note: 'pricing' },
  ]
  return (
    <div className="bobcat-visual visual-pad" aria-label="Conceptual pricing intelligence workflow; no customer data">
      <div className="visual-topline"><span>Agent workflow</span><span className="status-live">processing</span></div>
      <div className="agent-flow">
        {nodes.map(({ icon: Icon, label, note }, index) => (
          <div className="flow-segment" key={label}>
            <motion.div className="flow-node" whileHover={{ y: -6, scale: 1.03 }}>
              <Icon size={17} /><strong>{label}</strong><small>{note}</small>
              <motion.span className="node-pulse" animate={{ opacity: [.25, .9, .25], scale: [.8, 1.1, .8] }} transition={{ duration: 2, delay: index * .25, repeat: Infinity }} />
            </motion.div>
            {index < nodes.length - 1 && <FlowLine delay={index * .4} />}
          </div>
        ))}
      </div>
      <div className="price-grid">
        <div className="price-list">
          <div><span>BX-271</span><strong>96% match</strong></div>
          <div><span>BX-409</span><strong>89% match</strong></div>
          <div><span>BX-818</span><strong>review</strong></div>
        </div>
        <div className="price-chart" aria-hidden="true">
          {[48, 72, 57, 88, 67, 93, 78].map((height, index) => <motion.i key={index} initial={{ height: 0 }} whileInView={{ height: `${height}%` }} viewport={{ once: true }} transition={{ delay: index * .08, duration: .7 }} />)}
        </div>
      </div>
      <span className="concept-label">Conceptual system visual · no private data</span>
    </div>
  )
}

function MeetingVisual() {
  return (
    <div className="meeting-visual visual-pad" aria-label="Conceptual meeting intelligence interface">
      <div className="meeting-head"><div><span className="avatar-stack"><i>SK</i><i>AR</i><i>+3</i></span><strong>Product sync</strong></div><span className="record-pill"><i /> 42:18</span></div>
      <div className="meeting-layout">
        <div className="transcript-pane">
          <div className="pane-title"><FileText size={15} /> Transcript</div>
          {[72, 92, 58, 86, 65].map((width, index) => <div className="transcript-row" key={width}><span>{index % 2 ? 'AR' : 'SK'}</span><p><i style={{ width: `${width}%` }} /><i style={{ width: `${width - 22}%` }} /></p></div>)}
        </div>
        <div className="insight-pane">
          <div className="ai-summary"><span><Sparkles size={14} /> AI summary</span><p>Aligned on launch scope and technical dependencies.</p></div>
          <div className="action-list"><span>Action items</span>{['Validate API contract', 'Prepare QA build', 'Review launch notes'].map((item, index) => <motion.div key={item} initial={{ opacity: 0, x: 12 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: .2 + index * .12 }} viewport={{ once: true }}><CheckCircle2 size={14} /><p>{item}</p><small>{index === 1 ? 'AR' : 'SK'}</small></motion.div>)}</div>
        </div>
      </div>
      <span className="concept-label">Conceptual interface · replace with approved screenshot</span>
    </div>
  )
}

function RagVisual() {
  const steps = [{ icon: Upload, name: 'Upload' }, { icon: Box, name: 'Chunks' }, { icon: Database, name: 'Vectors' }, { icon: Search, name: 'Retrieve' }, { icon: Bot, name: 'Answer' }]
  return (
    <div className="rag-visual visual-pad" aria-label="Conceptual retrieval augmented generation pipeline">
      <div className="rag-pipeline">{steps.map(({ icon: Icon, name }, index) => <div className="rag-step-wrap" key={name}><motion.div className="rag-step" whileHover={{ y: -5 }}><Icon size={16} /><span>{name}</span></motion.div>{index < steps.length - 1 && <FlowLine delay={index * .25} />}</div>)}</div>
      <div className="rag-console">
        <div className="query"><Search size={15} /><span>How does the system handle access control?</span></div>
        <div className="answer-block"><span><Sparkles size={14} /> Grounded answer</span><p>The application uses role-aware authorization at the API boundary…</p><div className="source-cards"><i>Source 01 · p.12</i><i>Source 02 · p.19</i></div></div>
        <div className="retrieval-meter"><span>Retrieval confidence</span><div><motion.i initial={{ width: 0 }} whileInView={{ width: '87%' }} viewport={{ once: true }} transition={{ duration: 1.1, ease: 'easeOut' }} /></div><strong>0.87</strong></div>
      </div>
      <span className="concept-label">Conceptual retrieval trace</span>
    </div>
  )
}

function CommerceVisual() {
  const products = [
    { name: 'Studio audio', price: '₹8,490', color: 'lavender' },
    { name: 'Smart display', price: '₹12,990', color: 'orange' },
    { name: 'Travel tech', price: '₹4,290', color: 'mint' },
  ]
  return (
    <div className="commerce-visual visual-pad" aria-label="Conceptual multi-role commerce interface">
      <div className="store-head"><strong><ShoppingBag size={17} /> Northstar</strong><div><span>Search products</span></div><i>Cart · 2</i></div>
      <div className="store-layout">
        <div className="product-grid">{products.map((product, index) => <motion.div className="product-card" key={product.name} whileHover={{ y: -6, rotate: index - 1 }}><div className={`product-object ${product.color}`}><span /></div><small>{product.name}</small><strong>{product.price}</strong></motion.div>)}</div>
        <div className="role-panel"><span><Users size={14} /> Role control</span>{['Customer', 'Seller', 'Administrator'].map((role, index) => <div key={role} className={index === 1 ? 'active' : ''}><i>{role.slice(0, 1)}</i><span>{role}</span>{index === 1 && <CheckCircle2 size={13} />}</div>)}<button type="button">Open seller tools</button></div>
      </div>
      <span className="concept-label">Conceptual storefront · not a product screenshot</span>
    </div>
  )
}

export function ProjectVisual({ type, compact = false }: VisualProps) {
  return <div className={`project-visual-shell visual-${type} ${compact ? 'is-compact' : ''}`}>{type === 'bobcat' && <BobcatVisual />}{type === 'meeting' && <MeetingVisual />}{type === 'rag' && <RagVisual />}{type === 'commerce' && <CommerceVisual />}</div>
}

