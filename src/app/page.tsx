"use client";

import { useState, type ReactNode } from "react";

type ChallengePlan = {
  size: string;
  fee: string;
  minDays: string;
  dailyMaxLoss: string;
  maxDrawdown: string;
  leverage: string;
  performanceSplit: string;
  phase1Target: string;
  phase2Target?: string;
};

const classicPlans: ChallengePlan[] = [
  {
    size: "$15,000",
    fee: "$99",
    minDays: "99",
    dailyMaxLoss: "5%",
    maxDrawdown: "10%",
    leverage: "1:100",
    performanceSplit: "Up to 90%",
    phase1Target: "9%",
    phase2Target: "5%",
  },
  {
    size: "$30,000",
    fee: "$169",
    minDays: "169",
    dailyMaxLoss: "5%",
    maxDrawdown: "10%",
    leverage: "1:100",
    performanceSplit: "Up to 90%",
    phase1Target: "9%",
    phase2Target: "5%",
  },
  {
    size: "$50,000",
    fee: "$279",
    minDays: "279",
    dailyMaxLoss: "5%",
    maxDrawdown: "10%",
    leverage: "1:100",
    performanceSplit: "Up to 90%",
    phase1Target: "9%",
    phase2Target: "5%",
  },
  {
    size: "$100,000",
    fee: "$499",
    minDays: "499",
    dailyMaxLoss: "5%",
    maxDrawdown: "10%",
    leverage: "1:100",
    performanceSplit: "Up to 90%",
    phase1Target: "9%",
    phase2Target: "5%",
  },
  {
    size: "$200,000",
    fee: "$999",
    minDays: "999",
    dailyMaxLoss: "5%",
    maxDrawdown: "10%",
    leverage: "1:100",
    performanceSplit: "Up to 90%",
    phase1Target: "9%",
    phase2Target: "5%",
  },
  {
    size: "$500,000",
    fee: "$2949",
    minDays: "2949",
    dailyMaxLoss: "5%",
    maxDrawdown: "10%",
    leverage: "1:100",
    performanceSplit: "Up to 90%",
    phase1Target: "9%",
    phase2Target: "5%",
  },
];

const speedyPlans: ChallengePlan[] = [
  {
    size: "$15,000",
    fee: "$119",
    minDays: "119",
    dailyMaxLoss: "4%",
    maxDrawdown: "10%",
    leverage: "1:50",
    performanceSplit: "Up to 90%",
    phase1Target: "10%",
  },
  {
    size: "$30,000",
    fee: "$199",
    minDays: "199",
    dailyMaxLoss: "4%",
    maxDrawdown: "10%",
    leverage: "1:50",
    performanceSplit: "Up to 90%",
    phase1Target: "10%",
  },
  {
    size: "$50,000",
    fee: "$349",
    minDays: "349",
    dailyMaxLoss: "4%",
    maxDrawdown: "10%",
    leverage: "1:50",
    performanceSplit: "Up to 90%",
    phase1Target: "10%",
  },
  {
    size: "$100,000",
    fee: "$649",
    minDays: "649",
    dailyMaxLoss: "4%",
    maxDrawdown: "10%",
    leverage: "1:50",
    performanceSplit: "Up to 90%",
    phase1Target: "10%",
  },
  {
    size: "$200,000",
    fee: "$1149",
    minDays: "1149",
    dailyMaxLoss: "4%",
    maxDrawdown: "10%",
    leverage: "1:50",
    performanceSplit: "Up to 90%",
    phase1Target: "10%",
  },
];

const chartSets = [
  {
    label: "Last 7 Days",
    balance: "$134,421.11",
    pnl: "$2,342.23",
    points: [
      [54, 193],
      [95, 183],
      [136, 158],
      [177, 129],
      [218, 151],
      [259, 132],
      [300, 106],
      [341, 96],
      [382, 110],
      [423, 88],
      [464, 99],
      [505, 81],
      [546, 58],
      [587, 60],
      [628, 39],
      [669, 17],
    ],
  },
  {
    label: "Last 30 Days",
    balance: "$151,820.44",
    pnl: "$4,892.10",
    points: [
      [54, 206],
      [95, 188],
      [136, 175],
      [177, 154],
      [218, 165],
      [259, 133],
      [300, 118],
      [341, 123],
      [382, 95],
      [423, 90],
      [464, 74],
      [505, 58],
      [546, 63],
      [587, 38],
      [628, 24],
      [669, 12],
    ],
  },
  {
    label: "YTD",
    balance: "$182,994.88",
    pnl: "$8,420.35",
    points: [
      [54, 214],
      [95, 198],
      [136, 181],
      [177, 160],
      [218, 145],
      [259, 130],
      [300, 116],
      [341, 103],
      [382, 91],
      [423, 77],
      [464, 65],
      [505, 51],
      [546, 42],
      [587, 30],
      [628, 20],
      [669, 8],
    ],
  },
];

export default function Page() {
  const [classicIndex, setClassicIndex] = useState(0);
  const [speedyIndex, setSpeedyIndex] = useState(0);
  const [chartIndex, setChartIndex] = useState(0);

  const activeClassic = classicPlans[classicIndex];
  const activeSpeedy = speedyPlans[speedyIndex];
  const activeChart = chartSets[chartIndex];

  return (
    <main className="cyber-page relative min-h-screen overflow-hidden bg-[#060505] text-white">
      <Background />

      <div className="relative z-10 mx-auto w-full max-w-[1180px] px-5 pb-16 pt-6 sm:px-7 xl:px-0">
        <Header />

        <section className="relative grid gap-8 pb-8 pt-10 lg:grid-cols-[500px_1fr] lg:items-start">
          <Hero />
          <TradingDashboard
            activeChart={activeChart}
            chartIndex={chartIndex}
            setChartIndex={setChartIndex}
          />
        </section>

        <ClassicChallenge
          activePlan={activeClassic}
          activeIndex={classicIndex}
          setActiveIndex={setClassicIndex}
        />

        <SpeedyChallenge
          activePlan={activeSpeedy}
          activeIndex={speedyIndex}
          setActiveIndex={setSpeedyIndex}
        />

        <AsSeenIn />
        <PropFirm />
        <WhyChoose />
      </div>
    </main>
  );
}

function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="gold-holo-bg absolute inset-0" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_20%,rgba(215,165,58,.12),transparent_26%),radial-gradient(circle_at_84%_18%,rgba(215,165,58,.10),transparent_24%),linear-gradient(90deg,rgba(6,5,5,.32)_0%,rgba(6,5,5,.04)_45%,rgba(6,5,5,.30)_100%),linear-gradient(180deg,rgba(6,5,5,.04)_0%,rgba(6,5,5,.18)_42%,rgba(6,5,5,.54)_100%)]" />

      <div className="cyber-grid-bg absolute inset-0" />
      <div className="cyber-scanlines absolute inset-0" />
      <div className="gold-orb gold-orb-left absolute" />
      <div className="gold-orb gold-orb-right absolute" />
      <div className="floor-grid absolute bottom-0 left-0 right-0 h-[360px]" />
    </div>
  );
}

function Header() {
  return (
    <header className="relative flex items-center justify-between gap-5">
      <div className="flex items-center gap-3">
        <div className="relative h-[52px] w-[82px]">
          <div className="logo-orbit absolute left-0 top-0 h-[52px] w-[52px]" />
          <span className="absolute left-[50px] top-[17px] text-[18px] font-black tracking-[-.03em] text-white">
            eye<span className="text-[#d7a53a]">FG</span>
          </span>
        </div>
      </div>

      <nav className="hidden items-center gap-8 text-[13px] font-bold text-white/82 lg:flex">
        <a className="transition hover:text-[#e5b44a]" href="#how">
          How It Works
        </a>
        <a className="nav-active-gold" href="#challenges">
          Challenges
        </a>
        <a className="transition hover:text-[#e5b44a]" href="#academy">
          Academy
        </a>
        <a className="transition hover:text-[#e5b44a]" href="#about">
          About Us
        </a>
        <a className="transition hover:text-[#e5b44a]" href="#affiliates">
          Affiliates
        </a>
      </nav>

      <div className="flex items-center gap-3">
        <CyberButton solid>GET FUNDED</CyberButton>
        <CyberButton className="hidden sm:inline-flex">LOGIN</CyberButton>

        <button
          type="button"
          className="cyber-cut hidden h-11 items-center border border-[#6c5323]/70 bg-black/36 px-5 text-[13px] font-bold text-white/82 shadow-[inset_0_0_18px_rgba(229,180,74,.08)] md:inline-flex"
        >
          English
          <span className="ml-3 text-white/55">⌄</span>
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <div className="relative pt-6 lg:pt-8">
      <h1 className="cyber-title relative z-10 max-w-[500px] text-[54px] font-black uppercase leading-[.9] tracking-[-.045em] text-white drop-shadow-[0_0_6px_rgba(255,255,255,.08)] sm:text-[68px] lg:text-[70px]">
        Empowering
        <br />
        Traders
        <br />
        <span className="text-[#e1b14b] drop-shadow-[0_0_14px_rgba(225,177,75,.34)]">
          Of Tomorrow
        </span>
      </h1>

      <p className="relative z-10 mt-6 max-w-[500px] text-[15px] font-semibold leading-7 text-white/78">
        Trade with eyeFG — fair rules, funded accounts up to{" "}
        <span className="font-black text-[#e1b14b]">$500,000</span>
      </p>

      <div className="relative z-10 mt-8 flex flex-wrap gap-5">
        <CyberButton solid large>
          Get Funded Now
        </CyberButton>
        <CyberButton large>Learn How It Works</CyberButton>
      </div>

      <div className="relative z-10 mt-10 grid max-w-[500px] grid-cols-1 gap-5 sm:grid-cols-3">
        <Feature icon={<ShieldIcon />} label="Fair Rules" />
        <Feature icon={<StackIcon />} label="Solid Platforms" />
        <Feature icon={<BoltIcon />} label="Instant Access" />
      </div>
    </div>
  );
}

function TradingDashboard({
  activeChart,
  chartIndex,
  setChartIndex,
}: {
  activeChart: (typeof chartSets)[number];
  chartIndex: number;
  setChartIndex: (index: number) => void;
}) {
  return (
    <div className="hud-dashboard relative mt-2 w-full max-w-[590px] justify-self-end">
      <span className="dash-chip dash-chip-top-left" />
      <span className="dash-chip dash-chip-top-mid" />
      <span className="dash-chip dash-chip-bottom-left" />
      <span className="dash-chip dash-chip-bottom-right" />

      <div className="relative z-10 px-7 pb-7 pt-7 sm:px-8 sm:pb-8 sm:pt-8">
        <div className="flex items-center justify-between border-b border-white/13 pb-4">
          <h2 className="text-[21px] font-semibold tracking-[-.02em] text-white sm:text-[22px]">
            Trading Dashboard
          </h2>

          <div className="flex items-center gap-2 text-[15px] font-bold text-[#e1b14b]">
            <span className="h-[7px] w-[7px] rounded-full bg-[#e1b14b] shadow-[0_0_18px_rgba(225,177,75,1)]" />
            Live
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5 border-b border-white/10 py-5">
          <div>
            <p className="text-[12px] font-medium text-white/45">Account Balance</p>
            <p className="mt-3 font-mono text-[21px] font-semibold leading-none text-white sm:text-[24px]">
              {activeChart.balance}
            </p>
          </div>

          <div>
            <p className="text-[12px] font-medium text-white/45">Daily PnL</p>
            <p className="mt-3 font-mono text-[21px] font-black leading-none text-[#e1b14b] sm:text-[24px]">
              {activeChart.pnl}
            </p>
          </div>
        </div>

        <div className="pt-4">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[13px] font-semibold text-white/74">Profit Chart</p>
              <p className="mt-1 text-[12px] font-medium text-white/43">{activeChart.label}</p>
            </div>

            <div className="flex gap-2">
              {chartSets.map((item, index) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => setChartIndex(index)}
                  className={["range-tab", chartIndex === index ? "range-tab-active" : ""].join(
                    " ",
                  )}
                >
                  {item.label.replace("Last ", "")}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-3 h-[202px]">
            <ProfitChart points={activeChart.points} />
          </div>
        </div>
      </div>
    </div>
  );
}

function ClassicChallenge({
  activePlan,
  activeIndex,
  setActiveIndex,
}: {
  activePlan: ChallengePlan;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}) {
  return (
    <section id="challenges" className="mb-8">
      <HudPanel className="p-6 sm:p-8">
        <SectionHeader
          title="Classic Challenge"
          subtitle="Traditional challenge structure with 2 phases, higher leverage, and longer evaluation periods."
        />

        <div className="mt-7 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {classicPlans.map((item, index) => (
            <button
              key={item.size}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={["plan-tab", activeIndex === index ? "plan-tab-active" : ""].join(" ")}
            >
              {item.size}
            </button>
          ))}
        </div>

        <div className="mt-5 grid overflow-hidden rounded-[6px] border border-[#6b5224]/55 bg-black/35 md:grid-cols-[345px_1fr_1fr]">
          <div className="relative border-b border-[#6b5224]/45 p-7 md:border-b-0 md:border-r">
            <p className="text-[15px] font-medium uppercase tracking-wide text-white/55">
              Account Size
            </p>
            <p className="mt-2 font-mono text-[39px] font-black leading-none text-[#e1b14b]">
              {activePlan.size}
            </p>

            <p className="mt-6 text-[14px] uppercase tracking-wide text-white/55">
              Challenge Fee (One-time)
            </p>
            <p className="mt-2 font-mono text-[31px] font-black leading-none text-[#e1b14b]">
              {activePlan.fee}
            </p>

            <button className="primary-gold-button mt-7 h-[54px] w-full text-[15px]">
              Get Started
            </button>
          </div>

          <div className="divide-y divide-[#6b5224]/28 border-b border-[#6b5224]/45 md:border-b-0 md:border-r">
            <StatRow icon={<CalendarIcon />} label="Min Trading Days" value={activePlan.minDays} />
            <StatRow icon={<TrendIcon />} label="Daily Max Loss" value={activePlan.dailyMaxLoss} />
            <StatRow icon={<ShieldIcon />} label="Max Drawdown" value={activePlan.maxDrawdown} />
            <StatRow icon={<ScaleIcon />} label="Leverage" value={activePlan.leverage} />
          </div>

          <div className="divide-y divide-[#6b5224]/28">
            <StatRow
              icon={<PieIcon />}
              label="Performance Split"
              value={activePlan.performanceSplit}
            />
            <StatRow icon={<TargetIcon />} label="Phase 1 Target" value={activePlan.phase1Target} />
            <StatRow
              icon={<TargetIcon />}
              label="Phase 2 Target"
              value={activePlan.phase2Target ?? "-"}
            />
          </div>
        </div>

        <div className="mt-5 rounded-[6px] border border-[#6b5224]/45 bg-black/26 p-4">
          <div className="mb-4 flex items-center gap-4">
            <div className="h-px flex-1 bg-[#6b5224]/55" />
            <p className="text-[14px] font-medium uppercase tracking-wide text-white/65">
              Other Account Sizes
            </p>
            <div className="h-px flex-1 bg-[#6b5224]/55" />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {classicPlans.slice(1).map((item, index) => (
              <button
                key={item.size}
                type="button"
                onClick={() => setActiveIndex(index + 1)}
                className="mini-account-card"
              >
                <p className="font-mono text-[18px] font-black leading-none text-[#e1b14b]">
                  {item.size}
                </p>
                <p className="mt-2 font-mono text-[18px] font-black leading-none text-[#e1b14b]">
                  {item.fee}
                </p>
                <p className="mt-2 text-[12px] font-medium text-white/50">
                  Min Days {item.minDays}
                </p>
              </button>
            ))}
          </div>
        </div>
      </HudPanel>
    </section>
  );
}

function SpeedyChallenge({
  activePlan,
  activeIndex,
  setActiveIndex,
}: {
  activePlan: ChallengePlan;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}) {
  return (
    <section className="mb-8">
      <HudPanel className="p-6 sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <SectionHeader
            title="Speedy Challenge"
            subtitle="Fast-track challenge with single phase, lower leverage, and quicker evaluation periods."
          />

          <div className="cyber-cut flex h-[50px] items-center gap-2 border border-[#e1b14b]/80 bg-[#4a3312]/22 px-5 text-[13px] font-black text-[#e1b14b] shadow-[inset_0_0_18px_rgba(225,177,75,.10),0_0_20px_rgba(225,177,75,.12)]">
            <BoltIcon />
            Single Phase
          </div>
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-[270px_1fr]">
          <div className="space-y-3">
            {speedyPlans.map((item, index) => (
              <button
                key={item.size}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={[
                  "speedy-plan-card",
                  activeIndex === index ? "speedy-plan-card-active" : "",
                ].join(" ")}
              >
                {activeIndex === index && (
                  <span className="absolute -right-[9px] top-1/2 h-[18px] w-[18px] -translate-y-1/2 rotate-45 border-r border-t border-[#e1b14b] bg-[#0d0a08] shadow-[0_0_18px_rgba(225,177,75,.48)]" />
                )}

                <div className="flex justify-between gap-3">
                  <div>
                    <p className="font-mono text-[18px] font-black leading-none text-[#e1b14b]">
                      {item.size}
                    </p>
                    <p className="mt-2 text-[12px] font-medium text-white/50">
                      Min Days {item.minDays}
                    </p>
                  </div>
                  <p className="font-mono text-[14px] font-semibold text-white/80">{item.fee}</p>
                </div>
              </button>
            ))}
          </div>

          <div className="rounded-[7px] border border-[#6b5224]/55 bg-black/30 p-6 shadow-[inset_0_0_30px_rgba(225,177,75,.02)]">
            <div className="grid gap-8 sm:grid-cols-2">
              <TopMetric label="Selected Account" value={activePlan.size} />
              <TopMetric label="Challenge Fee (One-time)" value={activePlan.fee} />
            </div>

            <div className="mt-6 grid overflow-hidden rounded-[6px] border border-[#6b5224]/35 sm:grid-cols-2 lg:grid-cols-3">
              <StatBox icon={<CalendarIcon />} label="Min Trading Days" value={activePlan.minDays} />
              <StatBox icon={<TrendIcon />} label="Daily Max Loss" value={activePlan.dailyMaxLoss} />
              <StatBox icon={<ShieldIcon />} label="Max Drawdown" value={activePlan.maxDrawdown} />
              <StatBox icon={<ScaleIcon />} label="Leverage" value={activePlan.leverage} />
              <StatBox
                icon={<PieIcon />}
                label="Performance Split"
                value={activePlan.performanceSplit}
              />
              <StatBox icon={<TargetIcon />} label="Phase 1 Target" value={activePlan.phase1Target} />
            </div>

            <button className="primary-gold-button mt-6 h-[52px] w-full text-[15px]">
              Get Started
            </button>
          </div>
        </div>

        <div className="mt-6 rounded-[5px] border border-[#e1b14b]/35 bg-[#4a3312]/10 px-5 py-3 text-center text-[14px] font-medium text-white/72 shadow-[inset_0_0_18px_rgba(225,177,75,.04)]">
          <span className="mr-3 inline-grid h-6 w-6 place-items-center rounded-full border border-[#e1b14b] text-[#e1b14b] shadow-[0_0_12px_rgba(225,177,75,.22)]">
            i
          </span>
          No Phase 2 in Speedy Challenge. One phase to prove your skills and get funded
          faster.
        </div>
      </HudPanel>
    </section>
  );
}

function AsSeenIn() {
  return (
    <section className="mb-8">
      <div className="text-center">
        <h2 className="cyber-heading text-[31px] font-black uppercase leading-none tracking-wide text-[#e1b14b] drop-shadow-[0_0_16px_rgba(225,177,75,.35)]">
          As Seen In
        </h2>
        <p className="mt-2 text-[14px] font-medium text-white/48">
          Featured in leading trading and fintech publications
        </p>
      </div>

      <div className="mx-auto mt-5 grid max-w-[1060px] overflow-hidden rounded-[7px] border border-[#6b5224]/45 bg-black/30 shadow-[0_0_24px_rgba(225,177,75,.08)] md:grid-cols-3">
        <LogoBox>
          <span className="text-[36px] text-[#e1b14b]">✽</span>
          MATCH-TRADER
        </LogoBox>
        <LogoBox>
          <span className="text-[42px] text-emerald-400">★</span>
          Trustpilot
        </LogoBox>
        <LogoBox>
          <span className="text-[38px] italic tracking-[-.07em]">
            FP<span className="text-orange-400">F</span>X
          </span>
          <span className="text-[11px] font-black">TECH</span>
        </LogoBox>
      </div>
    </section>
  );
}

function PropFirm() {
  return (
    <section className="mb-8 grid gap-5 lg:grid-cols-[420px_1fr]">
      <HudPanel className="p-8">
        <h2 className="cyber-heading text-[34px] font-black uppercase leading-[1.05] tracking-[-.02em]">
          <span className="text-[#e1b14b] drop-shadow-[0_0_14px_rgba(225,177,75,.28)]">
            A Prop Firm
            <br />
            That Sees Your Talent.
          </span>
        </h2>

        <p className="mt-5 max-w-[330px] text-[16px] font-medium leading-8 text-white/68">
          We go beyond capital — we provide a fair opportunity for every skilled trader to
          grow, succeed, and scale.
        </p>
      </HudPanel>

      <div className="grid gap-5 md:grid-cols-3">
        <InfoCard icon={<GrowthIcon />} title="Growth" text="Scale up with higher capital" />
        <InfoCard icon={<TrophyIcon />} title="Success" text="Keep up to 90% of profits" />
        <InfoCard icon={<BoltIcon large />} title="Speed" text="Fast access, fast payouts" />
      </div>
    </section>
  );
}

function WhyChoose() {
  return (
    <section>
      <div className="text-center">
        <h2 className="cyber-heading text-[32px] font-black uppercase leading-none tracking-wide text-[#e1b14b] drop-shadow-[0_0_16px_rgba(225,177,75,.35)]">
          Why Choose eyeFG ?
        </h2>
        <p className="mt-2 text-[14px] font-medium text-white/48">
          Built for traders who demand a fair, transparent, and rewarding prop trading firm.
        </p>
      </div>

      <div className="mt-5 grid gap-5 md:grid-cols-3">
        <ReasonCard
          icon={<ShieldIcon large />}
          title="Smooth Evaluation Process"
          text="Clear rules, simple steps, and a trader-first approach to help you succeed."
        />
        <ReasonCard
          icon={<PieIcon large />}
          title="Generous Splits"
          text="Keep up to 90% of your profits with transparent scaling."
        />
        <ReasonCard
          icon={<StarIcon large />}
          title="Smart Risk Management"
          text="Fair risk parameters designed to protect traders and promote consistency."
        />
      </div>
    </section>
  );
}

function CyberButton({
  children,
  solid = false,
  large = false,
  className = "",
}: {
  children: ReactNode;
  solid?: boolean;
  large?: boolean;
  className?: string;
}) {
  return (
    <button
      type="button"
      className={[
        "cyber-cut inline-flex items-center justify-center text-[14px] font-black transition",
        large ? "h-[52px] min-w-[210px] px-8" : "h-11 px-6",
        solid
          ? "primary-gold-button"
          : "border border-[#6b5224]/70 bg-black/36 text-white/84 shadow-[inset_0_0_18px_rgba(225,177,75,.06)] hover:border-[#e1b14b]/82 hover:text-white hover:shadow-[0_0_16px_rgba(225,177,75,.14),inset_0_0_18px_rgba(225,177,75,.05)]",
        className,
      ].join(" ")}
    >
      {children}
    </button>
  );
}

function HudPanel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`hud-panel relative ${className}`}>
      <span className="hud-corner hud-corner-tl" />
      <span className="hud-corner hud-corner-tr" />
      <span className="hud-corner hud-corner-bl" />
      <span className="hud-corner hud-corner-br" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

function SectionHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div>
      <div className="flex items-center gap-4">
        <h2 className="cyber-heading text-[35px] font-black uppercase leading-none tracking-[-.015em] text-white">
          {title}
        </h2>
        <span className="hud-slashes hidden sm:block" />
      </div>
      <p className="mt-2 text-[16px] font-medium leading-7 text-white/62">{subtitle}</p>
    </div>
  );
}

function TopMetric({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[14px] font-medium uppercase tracking-wide text-white/55">{label}</p>
      <p className="mt-2 font-mono text-[42px] font-black leading-none text-[#e1b14b] drop-shadow-[0_0_10px_rgba(225,177,75,.25)]">
        {value}
      </p>
    </div>
  );
}

function Feature({ icon, label }: { icon: ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="grid h-10 w-10 shrink-0 place-items-center text-[#e1b14b] drop-shadow-[0_0_12px_rgba(225,177,75,.32)]">
        {icon}
      </div>
      <span className="text-[15px] font-medium leading-tight text-white/74">{label}</span>
    </div>
  );
}

function StatRow({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <div className="flex min-h-[72px] items-center gap-4 px-6">
      <div className="shrink-0 text-[#e1b14b] drop-shadow-[0_0_10px_rgba(225,177,75,.28)]">
        {icon}
      </div>
      <div className="flex flex-1 items-center justify-between gap-4">
        <p className="text-[14px] font-medium text-white/54">{label}</p>
        <p className="text-[18px] font-black text-white">{value}</p>
      </div>
    </div>
  );
}

function StatBox({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <div className="border-b border-r border-[#6b5224]/24 p-5 sm:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0 lg:[&:nth-last-child(-n+3)]:border-b-0">
      <div className="text-[#e1b14b] drop-shadow-[0_0_10px_rgba(225,177,75,.28)]">{icon}</div>
      <p className="mt-2 text-[13px] font-medium text-white/45">{label}</p>
      <p className="mt-1 text-[22px] font-black leading-none text-white">{value}</p>
    </div>
  );
}

function LogoBox({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-[86px] items-center justify-center gap-3 border-b border-[#6b5224]/30 px-6 text-center text-[23px] font-black text-white/90 md:border-b-0 md:border-r md:last:border-r-0">
      {children}
    </div>
  );
}

function InfoCard({ icon, title, text }: { icon: ReactNode; title: string; text: string }) {
  return (
    <HudPanel className="p-7 text-center">
      <div className="mx-auto grid h-[62px] w-[62px] place-items-center text-[#e1b14b] drop-shadow-[0_0_12px_rgba(225,177,75,.32)]">
        {icon}
      </div>
      <h3 className="mt-3 text-[19px] font-semibold text-white">{title}</h3>
      <p className="mt-2 text-[15px] font-medium leading-7 text-white/56">{text}</p>
    </HudPanel>
  );
}

function ReasonCard({ icon, title, text }: { icon: ReactNode; title: string; text: string }) {
  return (
    <HudPanel className="p-6">
      <div className="flex gap-5">
        <div className="shrink-0 text-[#e1b14b] drop-shadow-[0_0_12px_rgba(225,177,75,.32)]">
          {icon}
        </div>
        <div>
          <h3 className="text-[18px] font-semibold text-white">{title}</h3>
          <p className="mt-2 text-[15px] font-medium leading-7 text-white/58">{text}</p>
        </div>
      </div>
    </HudPanel>
  );
}

function ProfitChart({ points }: { points: number[][] }) {
  const path = points.map(([x, y], index) => `${index === 0 ? "M" : "L"}${x} ${y}`).join(" ");
  const fill = `${path} L669 252 L54 252 Z`;

  return (
    <svg viewBox="0 0 720 305" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id="goldFill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#e1b14b" stopOpacity=".44" />
          <stop offset="100%" stopColor="#e1b14b" stopOpacity="0" />
        </linearGradient>

        <filter id="goldGlow">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {[36, 88, 140, 192, 244].map((y) => (
        <line
          key={y}
          x1="50"
          x2="696"
          y1={y}
          y2={y}
          stroke="rgba(255,255,255,.10)"
          strokeDasharray="5 7"
        />
      ))}

      {[90, 200, 310, 420, 530, 640].map((x) => (
        <line key={x} x1={x} x2={x} y1="28" y2="252" stroke="rgba(225,177,75,.12)" />
      ))}

      <text x="12" y="42" fill="rgba(255,255,255,.55)" fontSize="13">
        15K
      </text>
      <text x="12" y="94" fill="rgba(255,255,255,.55)" fontSize="13">
        10K
      </text>
      <text x="24" y="146" fill="rgba(255,255,255,.55)" fontSize="13">
        5K
      </text>
      <text x="36" y="198" fill="rgba(255,255,255,.55)" fontSize="13">
        0
      </text>
      <text x="12" y="250" fill="rgba(255,255,255,.55)" fontSize="13">
        -5K
      </text>

      <path d={fill} fill="url(#goldFill)" />
      <path d={path} fill="none" stroke="#e1b14b" strokeWidth="4" filter="url(#goldGlow)" />

      {points.map(([x, y]) => (
        <circle
          key={`${x}-${y}`}
          cx={x}
          cy={y}
          r="4"
          fill="#090705"
          stroke="#e1b14b"
          strokeWidth="3"
        />
      ))}

      {["May 17", "May 18", "May 19", "May 20", "May 21", "May 22", "May 23"].map(
        (date, index) => (
          <text
            key={date}
            x={76 + index * 101}
            y="294"
            fill="rgba(255,255,255,.52)"
            fontSize="13"
            textAnchor="middle"
          >
            {date}
          </text>
        ),
      )}
    </svg>
  );
}

function Svg({
  children,
  size = "h-7 w-7",
}: {
  children: ReactNode;
  size?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

function ShieldIcon({ large = false }: { large?: boolean }) {
  return (
    <Svg size={large ? "h-12 w-12" : "h-7 w-7"}>
      <path d="M12 3l7 4v5c0 5-3.5 8.5-7 9-3.5-.5-7-4-7-9V7l7-4z" />
      <path d="M9 12l2 2 4-5" />
    </Svg>
  );
}

function StackIcon() {
  return (
    <Svg>
      <path d="M4 7l8-4 8 4-8 4-8-4z" />
      <path d="M4 12l8 4 8-4" />
      <path d="M4 17l8 4 8-4" />
    </Svg>
  );
}

function BoltIcon({ large = false }: { large?: boolean }) {
  return (
    <Svg size={large ? "h-12 w-12" : "h-7 w-7"}>
      <path d="M13 2L4 14h7l-1 8 10-13h-7l1-7z" />
    </Svg>
  );
}

function CalendarIcon() {
  return (
    <Svg>
      <path d="M7 2v4M17 2v4M4 9h16M5 5h14v16H5z" />
    </Svg>
  );
}

function TrendIcon() {
  return (
    <Svg>
      <path d="M3 6l6 6 4-4 8 8M17 16h4v-4" />
    </Svg>
  );
}

function ScaleIcon() {
  return (
    <Svg>
      <path d="M12 3v18M6 7h12M7 7l-4 7h8L7 7zM17 7l-4 7h8l-4-7z" />
    </Svg>
  );
}

function PieIcon({ large = false }: { large?: boolean }) {
  return (
    <Svg size={large ? "h-12 w-12" : "h-7 w-7"}>
      <path d="M12 3v9h9" />
      <path d="M21 12A9 9 0 1 1 12 3" />
    </Svg>
  );
}

function TargetIcon() {
  return (
    <Svg>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3" />
      <path d="M16 8l4-4M17 4h3v3" />
    </Svg>
  );
}

function GrowthIcon() {
  return (
    <Svg size="h-12 w-12">
      <path d="M4 19h16M6 16v-5M12 16V7M18 16V4" />
      <path d="M5 11l6-4 4 3 5-7" />
    </Svg>
  );
}

function TrophyIcon() {
  return (
    <Svg size="h-12 w-12">
      <path d="M8 4h8v6c0 4-2 7-4 7s-4-3-4-7V4z" />
      <path d="M8 6H4v3c0 3 2 5 4 5M16 6h4v3c0 3-2 5-4 5" />
      <path d="M12 17v3M8 21h8" />
    </Svg>
  );
}

function StarIcon({ large = false }: { large?: boolean }) {
  return (
    <Svg size={large ? "h-12 w-12" : "h-7 w-7"}>
      <path d="M12 3l2.7 5.5 6.1.9-4.4 4.3 1 6.1L12 16.9 6.6 19.8l1-6.1-4.4-4.3 6.1-.9L12 3z" />
    </Svg>
  );
}