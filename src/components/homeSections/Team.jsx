import ScrollReveal from '../animations/ScrollReveal'
import SectionChip from '../common/SectionChip'

const ProfileCard = ({ name, role, bio }) => {
  return (
    <div className="card-base p-5 rounded-xl border border-border-secondary">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-primary-pink/10 flex items-center justify-center text-2xl font-bold">{name.split(' ').map(n=>n[0]).slice(0,2).join('')}</div>
        <div>
          <div className="font-bold">{name}</div>
          <div className="text-xs text-text-light">{role}</div>
        </div>
      </div>

      <p className="text-sm text-text-light mt-4">{bio}</p>
    </div>
  )
}

const Team = () => {
  const members = [
    { name: 'Ayesha Khan', role: 'Creative Director', bio: 'Leads creative strategy and brand direction with an eye for design-led solutions.' },
    { name: 'Zain Malik', role: 'Head of Development', bio: 'Builds fast, reliable web experiences and leads engineering for product launches.' },
    { name: 'Sana Iqbal', role: 'Growth Strategist', bio: 'Drives campaigns and performance, combining data and creative to scale brands.' }
  ]

  return (
    <section id="team" className="section-base bg-dark-base py-20 md:py-28 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="mb-8 text-center">
            <SectionChip>The People Behind Pixnix</SectionChip>
            <h2 className="font-black text-4xl md:text-5xl leading-tight mt-3">Small Team. Big Impact.</h2>
            <p className="text-text-light max-w-2xl mx-auto mt-3">We're a lean, focused team of creative professionals who care deeply about the work we put out. No bloated agency overhead — just talented people fully invested in your brand's success.</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {members.map((m, i) => (
            <ScrollReveal key={i}>
              <ProfileCard name={m.name} role={m.role} bio={m.bio} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
