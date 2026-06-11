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
        <HowItWorks />
        <SupportedPlatforms />
        <DiscordCommunity />
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

        <p className="mt-5 max-w-[350px] text-[16px] font-medium leading-8 text-white/68">
          At eyeFG we encourage traders to make the most profitable trades in their
          challenges.
          <br />
          Your Success is our success
        </p>
      </HudPanel>

      <div className="grid gap-5 md:grid-cols-3">
        <InfoCard icon={<GrowthIcon />} title="Growth" text="We help you get better." />
        <InfoCard icon={<TrophyIcon />} title="Success" text="Pass Challenges" />
        <InfoCard icon={<BoltIcon large />} title="Speed" text="Instant Access" />
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
          We're built different. Here's what sets us apart from other prop trading firms.
        </p>
      </div>

      <div className="mt-5 grid gap-5 md:grid-cols-3">
        <ReasonCard
          icon={<ShieldIcon large />}
          title="Smooth Evaluation Process"
          text="Fair, transparent, and fast funding decisions. Get evaluated fast and easy."
        />
        <ReasonCard
          icon={<PieIcon large />}
          title="Generous Splits"
          text="Keep up to 90% of your profits with our industry-leading express structure."
        />
        <ReasonCard
          icon={<StarIcon large />}
          title="Smart Risk Management"
          text="Rules designed for traders, not against them. Reasonable drawdown limits."
        />
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how" className="relative mb-8 mt-14 sm:mt-16 lg:mt-20">
      <div className="mb-7 text-center">
        <p className="cyber-heading text-[14px] font-black uppercase tracking-[0.28em] text-[#e1b14b]/80">
          Process Overview
        </p>

        <h2 className="cyber-heading mt-2 text-[42px] font-black uppercase leading-none tracking-[-.015em] text-white sm:text-[52px]">
          How It Works
        </h2>

        <p className="mx-auto mt-3 max-w-[620px] text-[16px] font-medium leading-7 text-white/62">
          Three simple steps to get funded and start earning with our capital.
        </p>
      </div>

      <HudPanel className="how-works-shell overflow-hidden p-5 sm:p-7 lg:p-8">
        <div className="grid gap-7 lg:grid-cols-[1.05fr_.95fr] lg:items-stretch">
          <div className="relative">
            <div className="video-hud-frame relative overflow-hidden">
              <div className="absolute left-5 top-5 z-20 cyber-cut border border-[#e1b14b]/45 bg-black/65 px-4 py-2 text-[11px] font-black uppercase tracking-[0.16em] text-[#e1b14b] shadow-[0_0_16px_rgba(225,177,75,.12)]">
                Live Process Preview
              </div>

              <video
                className="h-full min-h-[320px] w-full object-cover"
                src="https://eyefg.com/wp-content/uploads/2025/12/Welcome-to-eyeFG.mp4"
                autoPlay
                loop
                muted
                playsInline
                controls
                controlsList="nodownload"
              />

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(6,5,5,.20),transparent_42%,rgba(6,5,5,.18)),linear-gradient(180deg,transparent_58%,rgba(6,5,5,.45))]" />
            </div>
          </div>

          <div className="relative flex h-full flex-col justify-center">
            <div className="journey-intro-panel mb-7 px-6 py-5">
              <p className="text-[12px] font-black uppercase tracking-[0.22em] text-[#e1b14b]/78">
                EyeFG onboarding
              </p>
              <h3 className="mt-2 text-[26px] font-black leading-tight text-white">
                Get funded in 3 simple steps
              </h3>
            </div>

            <div className="relative">
              <JourneyFlow />

              <div className="space-y-5">
                <JourneyStep
                  number="01"
                  title="Purchase a challenge"
                  text="Buy a challenge you like. Choose the account size you prefer."
                />

                <JourneyStep
                  number="02"
                  title="Prove Your Skills"
                  text="Trade with our virtual capital and hit your profit targets while following our reasonable risk management rules."
                />

                <JourneyStep
                  number="03"
                  title="Get Funded"
                  text="Get funded & get your profits paid regularly. Pass the challenge and receive your funded account. Get profits paid out regularly with our Quick Processing system."
                />
              </div>
            </div>

            <div className="mt-7">
              <a
                href="#challenges"
                className="cyber-cut inline-flex h-12 w-full items-center justify-center bg-gradient-to-b from-[#e6ba5c] via-[#c99536] to-[#a97822] px-5 text-[14px] font-black text-white shadow-[0_0_14px_rgba(215,165,58,.22),inset_0_0_16px_rgba(255,255,255,.08)]"
              >
                START YOUR JOURNEY
              </a>
            </div>
          </div>
        </div>
      </HudPanel>
    </section>
  );
}

function SupportedPlatforms() {
  return (
    <section className="mt-14">
      <div className="text-center">
        <p className="cyber-heading text-[14px] font-black uppercase tracking-[0.28em] text-[#e1b14b]/80">
          Trading Access
        </p>

        <h2 className="cyber-heading mt-2 text-[38px] font-black uppercase leading-none tracking-[-.015em] text-white sm:text-[48px]">
          Supported{" "}
          <span className="text-[#e1b14b] drop-shadow-[0_0_14px_rgba(225,177,75,.28)]">
            Trading Platforms
          </span>
        </h2>
      </div>

      <HudPanel className="mt-7 p-6 sm:p-8">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="platform-card">
            <div className="platform-mark platform-mark-match">
              <span>✣</span>
            </div>
            <div>
              <p className="text-[12px] font-black uppercase tracking-[0.2em] text-white/42">
                Platform
              </p>
              <h3 className="mt-2 text-[28px] font-black uppercase tracking-[-.03em] text-white">
                Match-Trader
              </h3>
            </div>
          </div>

          <div className="platform-card">
            <div className="platform-mark platform-mark-gooey">
              <span>G</span>
            </div>
            <div>
              <p className="text-[12px] font-black uppercase tracking-[0.2em] text-white/42">
                Platform
              </p>
              <h3 className="mt-2 text-[28px] font-black uppercase tracking-[-.03em] text-white">
                Gooey Trade
              </h3>
            </div>
          </div>
        </div>

        <div className="newsletter-panel mt-8">
          <div>
            <p className="text-[12px] font-black uppercase tracking-[0.22em] text-[#e1b14b]/78">
              Newsletter
            </p>
            <h3 className="mt-2 text-[25px] font-black uppercase text-white">
              Stay updated with our newsletter!
            </h3>
          </div>

          <form
            className="mt-5 grid gap-4 md:grid-cols-[1fr_230px] md:items-center"
            onSubmit={(event) => event.preventDefault()}
          >
            <input
              type="email"
              placeholder="Email"
              aria-label="Email"
              className="newsletter-input h-[56px] w-full rounded-[10px] border border-[#6b5224]/55 bg-[#090705] px-5 text-[16px] font-semibold text-white outline-none placeholder:text-white/55 focus:border-[#e1b14b]/80"
            />
            <button
              type="submit"
              className="primary-gold-button h-[56px] rounded-[10px] text-[15px] uppercase"
            >
              Subscribe
            </button>
          </form>
        </div>
      </HudPanel>
    </section>
  );
}

function DiscordCommunity() {
  const members = [
    "https://eyefg.com/wp-content/uploads/2025/11/friendly-latina-woman-casual-clothing-genuine-smil.jpg",
    "https://eyefg.com/wp-content/uploads/2025/11/professional-trader-headshot.jpg",
    "https://eyefg.com/wp-content/uploads/2025/11/jhj.png",
    "https://eyefg.com/wp-content/uploads/2025/11/friendly-young-asian-man-casual-clothing-smiling-n-1.jpg",
    "https://eyefg.com/wp-content/uploads/2025/11/professional-man-with-sunglasses.png",
    "https://eyefg.com/wp-content/uploads/2025/11/friendly-caucasian-man-casual-clothing-warm-smile-.jpg",
  ];

  return (
    <section className="mt-8 pb-6">
      <div className="discord-panel">
        <div className="relative z-10">
          <div className="flex items-center gap-5">
            <a
              href="https://discord.gg/gbvDqV2xj"
              target="_blank"
              rel="noreferrer"
              className="discord-icon-box"
              aria-label="Join Discord"
            >
              <DiscordIcon />
            </a>

            <div>
              <p className="text-[12px] font-black uppercase tracking-[0.22em] text-[#e1b14b]/78">
                Community
              </p>
              <h2 className="mt-1 text-[29px] font-black leading-tight text-white sm:text-[34px]">
                Join Our Discord Community
              </h2>
              <p className="mt-1 text-[15px] font-semibold text-white/52">
                Click the Discord logo to join instantly
              </p>
            </div>
          </div>

          <p className="mt-8 max-w-[600px] text-[20px] font-semibold leading-9 text-white/82">
            Connect with successful traders, share strategies, get exclusive market insights,
            and receive priority support from our team.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-5">
            <div className="member-stack flex items-center">
              {members.map((src, index) => (
                <img
                  key={src}
                  src={src}
                  alt={`eyeFG community member ${index + 1}`}
                  className="member-avatar"
                  loading="lazy"
                />
              ))}
            </div>

            <a
              href="https://discord.gg/gbvDqV2xj"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 text-[15px] font-black text-white"
            >
              <UsersIcon />
              Join our active members
            </a>
          </div>
        </div>

        <div className="relative z-10 flex items-center justify-start lg:justify-end">
          <a
            href="https://discord.gg/gbvDqV2xj"
            target="_blank"
            rel="noreferrer"
            className="discord-cta"
          >
            <DiscordIcon small />
            Join Discord
          </a>
        </div>
      </div>
    </section>
  );
}

function DiscordIcon({ small = false }: { small?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={small ? "h-5 w-5" : "h-9 w-9"}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19.5 5.2A15.6 15.6 0 0 0 15.7 4l-.2.4c1.3.3 2.5.9 3.5 1.7a11.8 11.8 0 0 0-10 0c1-.8 2.2-1.4 3.5-1.7L12.3 4a15.6 15.6 0 0 0-3.8 1.2C6.1 8.8 5.5 12.2 5.8 15.6A15 15 0 0 0 10.4 18l.6-.9a9.8 9.8 0 0 1-1.5-.7l.4-.3a10.7 10.7 0 0 0 4.2.8 10.7 10.7 0 0 0 4.2-.8l.4.3c-.5.3-1 .5-1.5.7l.6.9a15 15 0 0 0 4.6-2.4c.4-3.9-.7-7.2-2.9-10.4ZM10.3 14c-.8 0-1.4-.7-1.4-1.5S9.5 11 10.3 11s1.4.7 1.4 1.5S11.1 14 10.3 14Zm5.4 0c-.8 0-1.4-.7-1.4-1.5s.6-1.5 1.4-1.5 1.4.7 1.4 1.5-.6 1.5-1.4 1.5Z" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <Svg size="h-6 w-6">
      <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
      <circle cx="10" cy="7" r="4" />
      <path d="M21 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </Svg>
  );
}

function JourneyFlow() {
  return (
    <svg
      className="journey-flow absolute left-[25px] top-[52px] hidden h-[calc(100%-104px)] w-[28px] overflow-visible sm:block"
      viewBox="0 0 28 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M14 0 L14 88"
        stroke="rgba(215,165,58,.22)"
        strokeWidth="1"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />

      <path
        className="journey-flow-dash"
        d="M14 0 L14 88"
        stroke="#d7a53a"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeDasharray="3 13"
        vectorEffect="non-scaling-stroke"
      />

      <circle r="2.1" fill="#f0c766" className="journey-flow-dot">
        <animateMotion dur="2.4s" repeatCount="indefinite" path="M14 0 L14 88" />
        <animate
          attributeName="opacity"
          dur="2.4s"
          repeatCount="indefinite"
          values="0;1;1;0"
          keyTimes="0;0.12;0.82;1"
        />
      </circle>

      <circle r="1.6" fill="#d7a53a" className="journey-flow-dot">
        <animateMotion
          dur="2.4s"
          repeatCount="indefinite"
          begin=".75s"
          path="M14 0 L14 88"
        />
        <animate
          attributeName="opacity"
          dur="2.4s"
          repeatCount="indefinite"
          begin=".75s"
          values="0;1;1;0"
          keyTimes="0;0.12;0.82;1"
        />
      </circle>

      <circle r="1.4" fill="#fff3c8" className="journey-flow-dot-white">
        <animateMotion
          dur="2.4s"
          repeatCount="indefinite"
          begin="1.45s"
          path="M14 0 L14 88"
        />
        <animate
          attributeName="opacity"
          dur="2.4s"
          repeatCount="indefinite"
          begin="1.45s"
          values="0;1;1;0"
          keyTimes="0;0.12;0.82;1"
        />
      </circle>
    </svg>
  );
}

function JourneyStep({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="journey-step relative grid gap-4 rounded-[8px] border border-[#6b5224]/38 bg-black/30 p-5 pl-5 shadow-[inset_0_0_22px_rgba(225,177,75,.025)] sm:grid-cols-[78px_1fr] sm:pl-0">
      <div className="relative z-10 flex items-start justify-center">
        <div className="journey-number grid h-[54px] w-[54px] place-items-center rounded-full border border-[#e1b14b]/70 bg-[#120d06] font-mono text-[16px] font-black text-[#e1b14b] shadow-[0_0_14px_rgba(225,177,75,.20),inset_0_0_14px_rgba(225,177,75,.08)]">
          {number}
        </div>
      </div>

      <div>
        <h3 className="text-[21px] font-black leading-tight text-white">{title}</h3>
        <p className="mt-2 text-[15px] font-medium leading-7 text-white/58">{text}</p>
      </div>
    </div>
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