'use client';

import React from 'react';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="mx-auto max-w-5xl px-6 py-16">

        {/* ================= 主卡片 ================= */}
        <section className="rounded-2xl bg-white border border-gray-200 shadow-sm p-8 md:p-12">
          <div className="flex flex-col gap-6">

            <div className="text-sm text-gray-500">天穹量化</div>

            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              交易员训练计划（免费筛选制）
            </h1>

            <p className="text-gray-700 leading-relaxed text-lg">
              我们是专注二级市场的职业交易员团队，已具备稳定盈利交易员与风控体系。
              目标在 2026 年继续培养孵化 20–30 名职业交易员，请查看下方视频结束，如果符合你的规划并且有兴趣参与，欢迎加入团队走向职业化
            </p>

            {/* 优势三点 */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="rounded-xl bg-gray-100 border border-gray-200 px-4 py-3">
                ✅ 训练期间不收取任何培训费
              </div>
              <div className="rounded-xl bg-gray-100 border border-gray-200 px-4 py-3">
                ✅ 不要求入金，不涉及投资行为
              </div>
              <div className="rounded-xl bg-gray-100 border border-gray-200 px-4 py-3">
                ✅ 仅面向认真想长期发展的人
              </div>
            </div>

            {/* 按钮 */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#video"
                className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
              >
                直接观看视频介绍
              </a>

              <a
                href="#flow"
                className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
              >
                查看参与流程
              </a>

              <a
                href="#contact"
                className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
              >
                联系团队 HR
              </a>
            </div>

            <div className="text-sm text-gray-500">
              建议：先看完视频，再查看参与要求并填写报名表（更高效，更不浪费彼此时间）。
            </div>
          </div>
        </section>

        {/* ================= 视频区域 ================= */}
        <section
          id="video"
          className="mt-16 rounded-2xl bg-white border border-gray-200 shadow-sm p-8 md:p-12"
        >
          <h2 className="text-2xl font-bold mb-4">视频讲解</h2>
          <p className="text-gray-600 mb-6">
            建议完整观看视频介绍，了解团队与训练内容后再报名。
          </p>

          <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-gray-200">
  <iframe
    src="https://player.bilibili.com/player.html?bvid=BV1gbZYBRE6Q&high_quality=1&danmaku=0"
    className="absolute inset-0 w-full h-full"
    frameBorder="0"
    allowFullScreen
  ></iframe>
</div>


          <div className="text-sm text-gray-500 mt-4">
            观看时长：约 20 分钟
          </div>
        </section>

        {/* ================= 流程区域 ================= */}
        <section
          id="flow"
          className="mt-16 rounded-2xl bg-white border border-gray-200 shadow-sm p-8 md:p-12"
        >
          <h2 className="text-2xl font-bold mb-8">已经准备好的成员 请查看下方参与流程</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-xl bg-gray-50 border border-gray-200 p-6">
              <div className="text-sm text-gray-500 mb-2">Step 1（3分钟）</div>
              <div className="font-semibold mb-2">
                公众号查看参与训练的详细要求
              </div>
              <div className="text-gray-600 text-sm">
                包括训练内容、时间投入、筛选标准与注意事项。
              </div>
            </div>

            <div className="rounded-xl bg-gray-50 border border-gray-200 p-6">
              <div className="text-sm text-gray-500 mb-2">Step 2（30秒）</div>
              <div className="font-semibold mb-2">
                符合要求就填写报名表
              </div>
              <div className="text-gray-600 text-sm">
                请认真填写，确保联系方式可用。
              </div>
            </div>

            <div className="rounded-xl bg-gray-50 border border-gray-200 p-6">
              <div className="text-sm text-gray-500 mb-2">Step 3</div>
              <div className="font-semibold mb-2">
                我们会按邀请码分配助教联系你
              </div>
              <div className="text-gray-600 text-sm">
                提交后预计 24 小时内通知，请注意微信/邮箱等。
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mt-8">
            <button className="px-6 py-3 rounded-xl bg-gray-900 text-white font-semibold hover:bg-black transition">
              查看参与要求
            </button>

            <button className="px-6 py-3 rounded-xl bg-gray-900 text-white font-semibold hover:bg-black transition">
              填写报名表
            </button>
          </div>
        </section>

        {/* ================= 联系区域 ================= */}
        <section
          id="contact"
          className="mt-16 grid md:grid-cols-2 gap-8"
        >
          <div className="rounded-2xl bg-white border border-gray-200 shadow-sm p-8">
            <h3 className="text-xl font-bold mb-4">联系团队 HR</h3>
            <p className="text-gray-600 mb-6">
              如果你对流程、训练安排有疑问，可以通过以下方式咨询。
            </p>

            <div className="space-y-4">
              <div className="rounded-xl bg-gray-50 border border-gray-200 p-4">
                微信：fulizhe26
              </div>
              <div className="rounded-xl bg-gray-50 border border-gray-200 p-4">
                钉钉：aa996620
              </div>
              <div className="rounded-xl bg-gray-50 border border-gray-200 p-4">
                邮箱：fulizhe90@gmail.com
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white border border-gray-200 shadow-sm p-8">
            <h3 className="text-xl font-bold mb-4">温馨提示</h3>
            <ul className="list-disc pl-6 space-y-3 text-gray-600">
              <li>训练期间不会收取培训费，不会要求入金、投资等行为。</li>
              <li>如担心链接风险，可自行搜索公众号：天穹量化，查看详细要求。</li>
              <li>报名以公众号文章中的“参与要求 + 报名入口”为准。</li>
            </ul>
          </div>
        </section>

        {/* ================= 页脚 ================= */}
        <footer className="mt-20 text-center text-sm text-gray-400">
          本页面仅用于训练计划说明与报名指引
        </footer>
      </div>
    </main>
  );
}
