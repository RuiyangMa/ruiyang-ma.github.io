# Proposal: Production Networks, Supplier Financing, and Green Supply Chain Rewiring

## 1. 一句话故事

环境监管不确定性上升时，绿色转型压力并不只落在自身高排放企业身上，而是通过生产网络传导到 network-brown firms；但供应商关系同时也是融资关系，依赖 trade credit 和 working capital 的企业更难更换供应商。因此，生产网络决定谁面对绿色转型压力，供应商融资关系决定谁能真正行动，earnings call 文本让我们观察企业是否只是意识到压力，还是完成真实 rewiring。

**核心命题**：

> Networks determine who faces green transition pressure; supplier financing determines who can act on it; LLM text lets us observe the gap between awareness and action.

中文版本：

> 生产网络决定绿色转型压力传导到谁，供应商融资关系决定谁有能力行动，而 LLM 文本让我们观察企业从意识到压力到真实供应链重连之间的缺口。

这版故事的重点不是“气候风险是否被市场定价”，也不是泛泛研究绿色供应链管理，而是一个 corporate finance 问题：**当环境政策不确定性通过生产网络制造绿色转型压力时，融资摩擦是否限制企业把这种压力转化为真实供应商网络调整？**

---

## 2. 研究动机

企业绿色转型不仅发生在专利、研发或自身排放端，也发生在供应链端。大量企业并不直接发明绿色技术，而是通过更换供应商、采购低碳材料、要求供应商减排、建立 Scope 3 管理体系、签署绿色采购协议等方式完成绿色转型。这类活动往往不会出现在专利数据中，但会在 earnings calls 中被管理层讨论，尤其当投资者关心监管风险、成本压力和供应链韧性时。

更重要的是，供应链绿色转型不是一个孤立的企业选择，而是一次**供应商网络重匹配**。企业不是在无限市场中随时替换 input，而是在一个有限、稀疏、关系依赖的供应商网络中寻找可替代的绿色节点。绿色供应商是否存在、是否离企业足够近、是否已有可接入关系、是否需要额外认证和磨合，都会决定企业能否完成转型。

本文的金融定位来自三层结构：

1. **KLLZ 层：network exposure / pressure。** 环境政策不确定性产生的绿色转型压力不只由自身排放决定，也由生产网络位置决定。自身低排放但处在高碳供应链中的 network-brown firms 可能面临更强的绿色调整压力。
2. **Almeida 层：supplier relationship as financing relationship。** 供应商关系不仅提供 input，也提供 trade credit、付款周期和 working capital 支持。更换供应商意味着失去原有关系融资并承担新的预付款、认证和磨合成本。
3. **LLM 层：talk vs action。** Earnings call 文本让我们区分企业是否意识到绿色供应链压力、是否披露计划、以及是否采取可验证行动。真正的机制不是“企业是否说绿色”，而是“企业是否能把 talk 转化为 network rewiring”。

近期基于 earnings call 和 LLM/NLP 的文献已经说明，文本可以捕捉专利之外的绿色创新与绿色采用。我们的切入点是在此基础上更进一步：**不是泛泛地衡量企业是否绿色创新，而是专门识别“绿色供应链转型”这一维度，并研究金融约束是否限制企业在监管不确定性冲击下的调整能力。**

这个问题重要，是因为供应链绿色转型具有明显的前期成本：

- 搜索和筛选低碳供应商；
- 对供应商进行环境审计和认证；
- 重新签订采购合同；
- 调整物流、质量控制和生产流程；
- 对 Scope 3 披露和供应商数据系统进行投资。

因此，面对同样的环境政策不确定性，不同企业的反应不应相同。网络暴露高的企业更需要调整供应链；但依赖供应商融资、现金紧张或 working capital 约束强的企业更难更换供应商。本文的核心机制是：**network position determines pressure, supplier financing determines action.**

---

## 3. 核心贡献

### 贡献 1：把绿色转型压力从自身排放推进到 network exposure

借鉴 KLLZ 的 γ vs χ 思路，本文区分企业自身碳暴露和网络碳暴露。绿色转型压力不一定集中在 direct-brown firms，也可能集中在 network-brown firms：自身排放不高，但供应商或客户网络使其暴露于环境政策不确定性。

核心变量包括：

- `DirectBrown` / γ：企业自身或所在行业的直接碳暴露；
- `NetworkBrown` / χ：通过生产网络传导而来的间接碳暴露；
- `UpstreamBrownPressure`：供应商侧高碳暴露；
- `DownstreamGreenPressure`：客户侧绿色要求或客户碳监管压力。

### 贡献 2：把供应商关系刻画为融资关系

借鉴 Almeida et al. (2024) 的 working-capital 视角，本文强调供应商关系不只是 input sourcing，也包含 trade credit 和付款安排。绿色 rewiring 的金融摩擦来自：新绿色供应商可能不提供原有账期，可能要求预付款，且需要认证、合同和营运资本投入。

核心融资摩擦变量包括：

- `Payables/COGS`、`Payables/Assets`：供应商融资依赖；
- working capital dependence：存货和应收占资产比例；
- cash holdings、SA/WW/KZ index：一般融资约束；
- supplier concentration 和 relationship duration：关系融资锁定。

### 贡献 3：用 LLM 构造绿色供应链 talk/action 指标

使用 earnings call transcripts 和 LLM/文本分析，构造 firm-quarter 层面的绿色供应链指标，捕捉传统专利或排放数据难以覆盖的供应链转型行为。

可能指标包括：

- `GreenSupplyChainTalk`：是否讨论绿色供应链、低碳采购、供应商减排、Scope 3、supplier engagement；
- `GreenSupplyChainAction`：是否提到已经执行的供应链绿色行动；
- `SupplierTransitionPlan`：是否披露供应商转型计划、时间表、量化目标；
- `CredibleGreenAction`：是否包含具体供应商、金额、数量、时间表或合同信息；
- `TalkActionGap`：绿色供应链讨论与真实行动之间的差距。

### 贡献 4：把环境政策不确定性作为连续冲击

与其依赖单一事件（如 Paris Agreement），本文使用连续的环境政策不确定性冲击，观察企业在不确定性上升后的动态反应。这使识别更细、更有时间变化，也更适合 local projection 框架。

可选冲击包括：

- Climate Policy Uncertainty / Environmental Policy Uncertainty 指数；
- 新闻文本构造的环境监管不确定性指数；
- WSJ/Factiva/Reuters 文章 + LLM 分类得到的月度 environmental regulatory uncertainty shock；
- Kou et al. 风格的 carbon regulatory shock 作为稳健性或替代冲击。

### 贡献 5：识别 network pressure × supplier financing 的公司层异质性

本文的核心不是证明“环境政策不确定性影响企业”，而是证明：**生产网络决定哪些企业面对绿色转型压力，供应商融资关系决定这些企业能否响应。**

主要预测是：

> 当环境政策不确定性上升时，network-brown firms 更频繁讨论绿色供应链转型；但其中依赖供应商融资或财务受限的企业更难将 talk 转化为 action 和真实 rewiring。

### 贡献 6：把绿色供应链转型刻画为网络 rewiring

本文不只看企业是否“谈论绿色供应链”，还进一步检验企业是否真的在供应商网络中重新连边：新增低碳供应商、切断高碳供应商、利用附近绿色供应商机会集，并在网络锁定程度较高时表现出更强的金融约束效应。

核心 network 变量包括：

- `GreenSupplierAvailability`：企业可接触的绿色供应商机会集；
- `GreenRewiring`：新增低碳供应商关系；
- `BrownLinkExit`：切断高碳供应商关系；
- `NetworkLockIn`：供应商集中度、关系久期、单一供应或缺少绿色替代；
- `PeerGreenPressure`：同一供应商网络中其他客户的绿色转型压力。

### 贡献 7：用真实供应链和金融市场结果验证文本信号

文本指标不是终点，而是进入企业行为的窗口。后续机制和外部效度可以使用：

- FactSet Revere + Trucost 构造真实供应链碳足迹 `SCF`；
- 高碳供应商关系断裂或替换；
- Scope 3 或供应商碳暴露下降；
- 运营成本、毛利率和库存效率变化；
- 债券利差、CDS 或信用评级变化。

这样，原先复杂的债券期限结构、Merton 分解和供应链网络证据可以降级为机制与后果分析，而不是主故事入口。network 仍然保留为本文的新机制，但不再把主故事拖成一条过长的理论链。

---

## 4. 概念框架

环境政策不确定性上升会提高企业进行绿色供应链调整的动机。一方面，未来碳监管、披露要求、绿色采购标准和贸易壁垒可能提高高碳供应链成本；另一方面，政策路径不确定使企业更需要降低对高碳供应商的依赖。但这个压力在生产网络中不是均匀分布的。

第一层是 **network pressure**。借鉴 KLLZ 的逻辑，企业面对的绿色转型压力由两部分组成：自身直接碳暴露 γ，以及通过供应商和客户网络传导来的间接暴露 χ。自身排放低的企业也可能因为上游供应商高碳、下游客户受监管压力强，成为 network-brown firms。

第二层是 **supplier financing friction**。借鉴 Almeida et al. (2024) 的逻辑，供应商关系不只是生产关系，也是短期融资关系。老供应商可能提供 trade credit、宽松账期和关系融资；新绿色供应商可能要求预付款、认证费用、更短账期或更高 working capital。于是，绿色 rewiring 对依赖 payables 或 cash-constrained 的企业尤其困难。

第三层是 **LLM-observed talk/action gap**。Earnings call 让我们看到企业是否意识到压力、是否披露计划、是否声称行动。真实供应链网络则让我们检验企业是否真的新增绿色供应商、退出棕色供应商并降低 SCF。

因此，环境政策不确定性带来的不是统一反应，而是三层分化：

| 维度 | 机制问题 | 预期结果 |
| --- | --- | --- |
| Network pressure | 哪些企业最需要转型？ | `NetworkBrown` 企业在 EPU 上升后更频繁讨论绿色供应链 |
| Supplier financing | 哪些企业能行动？ | 高 payables / working-capital constrained 企业 action 更弱 |
| LLM talk/action | 企业是意识到压力还是实际调整？ | 受限企业 `TalkActionGap` 扩大，真实 `GreenRewiring` 较弱 |

核心经验预测可以压缩为一句：

> EPU makes network-brown firms talk about green supply chains, but supplier-financing dependence prevents constrained firms from turning that talk into rewiring.

---

## 5. 数据与变量

### 5.1 Earnings call transcripts

样本可使用上市公司 quarterly earnings call transcripts，匹配 Compustat/CRSP/FactSet/Trucost。基本单位为 firm-quarter。

文本处理步骤：

1. 切分 transcript 为句子或段落；
2. 识别供应链相关语句；
3. 在供应链语句中识别绿色、低碳、环境监管、Scope 3、供应商减排等内容；
4. 使用 LLM 将语句分类为 talk、plan、action、credible action；
5. 聚合为 firm-quarter 指标。

### 5.2 绿色供应链文本指标

核心变量可以分三层：

#### 第一层：关注度

`GreenSupplyChainTalk_{i,t}`：企业在 earnings call 中是否讨论绿色供应链相关内容，或相关语句数量/占比。

#### 第二层：行动强度

`GreenSupplyChainAction_{i,t}`：企业是否提到实际供应链调整，例如更换供应商、绿色采购协议、supplier audit、Scope 3 reduction program、低碳原材料替代。

#### 第三层：可信行动

`CredibleGreenAction_{i,t}`：行动描述是否包含具体时间、金额、数量、供应商、目标或合同信息。这个变量可以降低 cheap talk 的干扰。

#### 关键派生变量

`TalkActionGap_{i,t} = GreenSupplyChainTalk_{i,t} - GreenSupplyChainAction_{i,t}`。

如果财务受限企业意识到风险但无法执行，则 `TalkActionGap` 应在不确定性冲击后扩大。

### 5.3 环境政策不确定性冲击

主变量为月度或季度环境政策不确定性指数 `EPU_t`。可以使用现有指数，也可以自行构造。

若自行构造：

1. 收集环境监管、气候政策、碳定价、排放披露、绿色贸易壁垒相关英文新闻；
2. 用 LLM 判断文章是否表达监管趋严、监管放松、政策不确定、或无关；
3. 构造月度 `EnvironmentalPolicyUncertainty_t`；
4. 使用 AR(1) 残差或标准化变化作为 shock。

### 5.4 融资摩擦：一般金融约束与供应商融资依赖

本文区分两类融资摩擦。第一类是一般金融约束，衡量企业整体融资能力；第二类是供应商融资依赖，衡量企业是否依赖既有供应商提供 working capital 支持。后者是本文借鉴 Almeida et al. (2024) 的关键金融机制。

#### 一般金融约束

- SA index；
- WW index；
- KZ index；
- Cash/assets；
- 未评级或低评级状态；
- 外部融资依赖行业指标。

主规格建议使用 pre-determined financial constraints，例如按上一年或样本前期均值定义，避免 contemporaneous reverse causality。

#### 供应商融资依赖

- `Payables/COGS`：企业中间品采购中由供应商融资支持的比例；
- `Payables/Assets`：供应商融资在资产中的重要性；
- `Payables/TotalLiabilities`：负债结构中供应商融资占比；
- `WorkingCapitalNeed`：存货 + 应收相对于资产或销售的比例；
- `MainQuarter`：可作为 Almeida-style 机制稳健性，用于识别企业 working-capital need 较高的季节。

核心解释是：企业如果高度依赖原有供应商提供 trade credit，那么切换到新绿色供应商时可能失去账期、信用额度和关系融资。因此，供应商融资依赖会放大绿色 rewiring 的摩擦。

### 5.5 供应链网络变量

为了把绿色供应链转型从“企业是否行动”推进到“企业如何在网络中重连”，需要构造一组 firm-quarter 或 relationship-quarter 层面的 network 变量。

#### Network pressure：γ vs χ

`DirectBrown_i` 或 `gamma_i`：企业自身或所在行业的直接碳暴露，可由自身排放强度、行业碳强度或直接碳监管暴露构造。

`NetworkBrown_i` 或 `chi_i`：企业通过生产网络承受的间接碳暴露。可以借鉴 KLLZ 的 Leontief sufficient statistic，用 BEA I-O 表、Trucost 碳暴露和 firm/industry mapping 构造。

`UpstreamBrownPressure_i`：企业供应商组合的碳暴露，强调上游 input 成本和供应商减排压力。

`DownstreamGreenPressure_i`：企业客户侧的绿色压力，例如客户自身 EPU 暴露、客户绿色供应链 talk/action、客户 Scope 3 管理强度或客户所在行业监管压力。

这些变量回答：绿色转型压力从网络的哪一侧传来，以及哪些企业是 network-brown firms。

#### 绿色机会集

`GreenSupplierAvailability_{i,t}`：企业可接触的绿色供应商机会集。可以从三个层面构造：

- 同行业供应商池中低碳供应商比例；
- 企业二阶供应链或同行网络中低碳供应商比例；
- 与企业当前供应商相似、但碳强度更低的潜在替代供应商数量。

这个变量回答：企业所在网络附近是否真的存在可替代的绿色节点。

#### 网络重连

`GreenRewiring_{i,t}`：企业新增低碳供应商关系，或新增供应商的平均碳强度低于原供应商组合。

`BrownLinkExit_{i,t}`：企业切断高碳供应商关系，尤其是事前碳强度位于行业上分位的供应商。

这两个变量回答：earnings call 中的绿色供应链行动是否对应真实的网络连边变化。

#### 网络锁定

`NetworkLockIn_{i,t}`：企业从原有供应商网络中退出的难度。可用以下代理：

- supplier HHI 或 top supplier share；
- 关系久期；
- single-sourcing 或供应商数量少；
- 高碳供应商中心度；
- 缺少低碳替代供应商。

预测是金融约束效应在 `NetworkLockIn` 高的企业中更强。

#### 网络外溢

`PeerGreenPressure_{i,t}`：企业供应商网络中其他客户的绿色供应链 talk/action 强度，或同一供应商受到的其他客户绿色压力。

这个变量用于识别绿色供应链转型是否沿网络扩散，以及财务受限企业是否更难响应这种外溢压力。

---

## 6. 主实证设计

### 6.1 三层主规格：network pressure × supplier financing

主回归把三层结构放在同一个 local projection 里：

```text
GreenSC_{i,t+h}
  = beta_h * EPUShock_t * NetworkPressure_i * SupplierFinancing_i
  + phi_h * EPUShock_t * NetworkPressure_i
  + psi_h * EPUShock_t * SupplierFinancing_i
  + lower-order interactions
  + Firm FE
  + Industry x Time FE
  + Controls
  + epsilon_{i,t+h}
```

其中 `NetworkPressure` 可以是 `NetworkBrown`、`chi`、`UpstreamBrownPressure` 或 `DownstreamGreenPressure`；`SupplierFinancing` 可以是 `Payables/COGS`、`HighPayables`、`WorkingCapitalNeed` 或一般 `Constrained` 指标。

其中 `GreenSC` 可以分别为：

- `GreenSupplyChainTalk`；
- `GreenSupplyChainAction`；
- `CredibleGreenAction`；
- `TalkActionGap`。

核心预测：

- 对 `Talk`：`EPUShock × NetworkPressure` 应为正，说明 network-brown firms 意识到绿色转型压力；
- 对 `Action`：三交互项应为负，说明依赖供应商融资或财务受限的 network-brown firms 更难行动；
- 对 `CredibleAction`：三交互项应为负，受限企业更少给出可验证行动；
- 对 `TalkActionGap`：三交互项应为正，受限企业更容易“意识到但做不到”。

这个规格是本文最核心的金融版本：**网络决定压力，供应商融资决定执行能力，文本区分 awareness 和 action。**

### 6.2 动态预测

Local projection 的优势是可以观察动态路径：

- `h = 0`：当期讨论是否上升；
- `h = 1-2`：是否开始披露计划；
- `h = 3-8`：是否出现真实供应链行动；
- `h = 8+`：是否在真实 SCF、运营结果或信用市场中体现。

预期模式：

| Horizon | Network-brown + 低融资摩擦 | Network-brown + 高融资摩擦 |
| --- | --- | --- |
| 短期 | Talk 上升 | Talk 也上升，甚至更强 |
| 中期 | Action / CredibleAction 上升 | Action 反应弱或滞后 |
| 长期 | Green rewiring、SCF 下降 | SCF 下降较少，高碳关系更难断 |

### 6.3 Direct-brown vs network-brown horse race

借鉴 KLLZ，主表应区分自身碳暴露和网络碳暴露：

```text
GreenSC_{i,t+h}
  = beta1_h * EPUShock_t * DirectBrown_i
  + beta2_h * EPUShock_t * NetworkBrown_i
  + beta3_h * EPUShock_t * DirectBrown_i * SupplierFinancing_i
  + beta4_h * EPUShock_t * NetworkBrown_i * SupplierFinancing_i
  + lower-order interactions
  + Firm FE
  + Industry x Time FE
  + Controls
  + epsilon_{i,t+h}
```

核心预测：

- `beta2_h > 0` for `Talk`：network-brown firms 在 EPU 上升后更明显意识到绿色供应链压力；
- `beta4_h < 0` for `Action` / `CredibleAction`：依赖供应商融资的 network-brown firms 更难行动；
- `beta4_h > 0` for `TalkActionGap`：network pressure 存在，但 financing friction 阻碍执行。

如果 `NetworkBrown` 比 `DirectBrown` 更强，这就是本文相对单纯 emissions-based climate risk 的主要 network 贡献。

### 6.4 Network opportunity set 版本

如果绿色供应链转型本质上是供应商网络重匹配，那么企业的反应不仅取决于自身融资能力，也取决于网络中是否存在可接入的绿色供应商。可以估计：

```text
GreenSC_{i,t+h}
  = beta_h * EPUShock_t * Constrained_i * GreenSupplierAvailability_i
  + lower-order interactions
  + Firm FE
  + Industry x Time FE
  + Controls
  + epsilon_{i,t+h}
```

预测：

- 当 `GreenSupplierAvailability` 高时，不受限企业更容易把 EPU 冲击转化为 `Action` 和 `GreenRewiring`；
- 财务受限企业对绿色机会集的利用更弱，即使附近存在绿色供应商，也更难完成接入；
- 因此，金融约束影响的不是“是否知道有绿色供应商”，而是“能否支付搜索、认证和切换成本来利用这些供应商”。

### 6.5 Supplier financing lock-in 版本

进一步检验“供应商关系也是融资关系”的机制。若老供应商提供 trade credit，新绿色供应商要求预付款或更短账期，那么依赖 payables 的企业更难切换供应商：

```text
GreenRewiring_{i,t+h}
  = beta_h * EPUShock_t * NetworkPressure_i * HighPayables_i
  + lower-order interactions
  + Firm FE
  + Industry x Time FE
  + Controls
  + epsilon_{i,t+h}
```

预测：`beta_h < 0`。高 payables 企业在 network pressure 上升后更难新增绿色供应商或退出高碳供应商。`MainQuarter` 可以作为 Almeida-style 机制稳健性，但不进入主线：

```text
GreenRewiring_{i,t+h}
  = beta_h * EPUShock_t * NetworkPressure_i * HighPayables_i * MainQuarter_{i,t}
  + FE + Controls
```

这一步只用来说明 working-capital need 较高时，绿色 rewiring 更受 supplier-financing friction 限制。

---

## 7. 三层机制与验证

### 7.1 LLM action 是否对应真实 network rewiring

第一步直接检验文本行动是否对应真实连边变化：

```text
GreenRewiring_{i,t+h}
  = beta_h * GreenSupplyChainAction_{i,t}
  + Firm FE
  + Industry x Time FE
  + Controls
```

如果 `GreenSupplyChainAction` 只是 cheap talk，它不应预测后续新增绿色供应商或切断高碳供应商。若它能预测 `GreenRewiring` 和 `BrownLinkExit`，则说明 earnings call 指标确实捕捉到供应链网络调整。

### 7.2 Supplier financing 是否造成 brown supplier lock-in

第二步检验 Almeida-style 机制：原有供应商关系是否因为 trade credit 和 working capital 支持而更难替换。关系层面可以估计：

```text
1{LinkDies_{i,j,t+h}}
  = beta_h * EPUShock_t * SupplierCarbon_j * HighPayables_i
  + Customer FE
  + Supplier FE
  + Industry x Time FE
  + Controls
```

预测：

- 对低 payables 企业，EPU 上升后高碳供应商关系更可能被切断；
- 对高 payables 企业，这种关系断裂更弱，说明企业被原有供应商融资关系锁住；
- 如果加入 `MainQuarter` 后效应更强，可作为 working-capital need 的机制稳健性，而不是主识别。

### 7.3 文本信号是否对应真实供应链碳变化

使用 FactSet Revere 供应商关系和 Trucost 碳强度，构造企业供应链碳足迹：

```text
SCF_{i,t} = sum_j w_{ij,t} * CarbonIntensity_{j,t}
```

验证：

```text
SCF_{i,t+h}
  = beta_h * EPUShock_t * NetworkPressure_i * SupplierFinancing_i
  + FE + Controls
```

预测：network-brown 且低融资摩擦的企业在 EPU 上升后 SCF 下降更多；network-brown 且高供应商融资依赖的企业下降更少。

### 7.4 上游和下游 pressure 的 horse race

借鉴另一篇 trade credit / production network outline，可以把绿色转型压力分成上游和下游两侧：

```text
GreenSC_{i,t+h}
  = beta1_h * EPUShock_t * UpstreamBrownPressure_i
  + beta2_h * EPUShock_t * DownstreamGreenPressure_i
  + beta3_h * EPUShock_t * UpstreamBrownPressure_i * SupplierFinancing_i
  + beta4_h * EPUShock_t * DownstreamGreenPressure_i * SupplierFinancing_i
  + FE
  + Controls
```

这个 horse race 回答：绿色供应链 rewiring 的压力主要来自上游高碳供应商成本，还是来自下游客户的 Scope 3 / 绿色采购压力。若 `DownstreamGreenPressure` 更强，故事会更接近“客户倒逼供应链绿色化”；若 `UpstreamBrownPressure` 更强，故事更接近“高碳 input 成本和供应商风险促使企业换供应商”。

### 7.5 Network opportunity set 是否被充分利用

检验企业是否能利用网络中的绿色机会：

```text
GreenRewiring_{i,t+h}
  = beta_h * EPUShock_t * SupplierFinancing_i * GreenSupplierAvailability_i
  + FE + Controls
```

核心判读：

- 若不受限企业在绿色机会集丰富时显著增加 `GreenRewiring`，说明 network opportunity set 有实际含义；
- 若受限企业对同样的机会集反应弱，说明金融约束阻碍的是“利用网络机会”的能力；
- 这比简单说“受限企业行动少”更有 network 特色。

### 7.6 Talk vs Action 的区分

这是本文最有张力的机制：

> Network-brown 且融资受限的企业未必没有意识到环境监管风险；它们可能同样谈论绿色供应链，但缺少执行能力。

因此应比较：

- `EPUShock x NetworkPressure -> Talk`；
- `EPUShock x NetworkPressure x SupplierFinancing -> Action`；
- `EPUShock x NetworkPressure x SupplierFinancing -> TalkActionGap`。

如果 `Talk` 不弱、但 `Action` 明显弱，同时 `TalkActionGap` 扩大，就能说明金融约束影响的是执行能力，而不是信息或意识。

### 7.7 经济后果

若受限企业无法及时绿色调整供应链，应进一步表现为：

- COGS/Sales 上升；
- gross margin 或 operating margin 下降；
- inventory turnover 恶化；
- Scope 3 或供应链碳暴露改善较慢；
- 债券利差或 CDS 上升。

这些结果可以作为后续机制和外部效度，而不是主结果。

---

## 8. 与现有文献的关系

### Green innovation beyond patents

相关文献使用 earnings calls 和 NLP/LLM 捕捉专利之外的绿色创新，包括 invention 和 adoption。本文沿用这一思想，但聚焦更窄、更有经济机制的对象：**绿色供应链转型**。我们不只是衡量企业是否绿色，而是研究企业在环境政策不确定性冲击下是否有能力调整供应链。

### Climate policy uncertainty

气候政策不确定性文献强调环境监管风险会影响资产价格、投资和企业决策。本文将这一冲击引入供应链维度，并研究公司财务条件如何塑造动态响应。

### Network origins of carbon risk

KLLZ 的核心洞见是：碳风险由自身直接暴露 γ 和网络间接暴露 χ 共同决定，且 χ 在资产定价中是一阶重要。本文借用这个 measurement logic，但把问题从 asset-pricing premium 转为 real adjustment：当 EPU 上升时，network-brown firms 是否更需要进行绿色供应链 rewiring？进一步，哪些 network-brown firms 因融资摩擦而调不动？

### Supplier financing and working-capital frictions

Almeida et al. (2024) 说明，供应商融资和 working capital frictions 会放大企业对冲击的真实反应。本文不完整搬用 WCCM 设计，而是借用其金融直觉：供应商关系同时是 input 关系和 financing 关系。因此，绿色 rewiring 不只是换 input，还可能意味着失去 trade credit、账期和关系融资。

### Financial constraints and real adjustment

金融约束文献说明融资摩擦会影响投资、创新和风险管理。本文的新增点是把金融约束应用到绿色供应链转型：供应链绿色调整是一种需要前期投入的真实调整，因此受融资能力影响。

### Supply chain climate risk

已有文献强调供应链是气候风险传导的重要渠道。本文进一步说明，供应链不是被动暴露，而是可以调整的组织结构；但这种调整不是无摩擦的，它发生在稀疏、关系依赖、具有搜索和匹配成本的网络中。本文的新增点是把气候供应链风险从“暴露”推进到“重连”：企业是否能在环境政策不确定性上升时，从棕色供应商网络转向绿色供应商网络。

### Endogenous production networks

内生生产网络文献强调企业会根据风险和成本重新选择供应商。本文把这个思想带入绿色转型场景：环境政策不确定性改变了绿色供应商和棕色供应商的相对吸引力，但金融约束决定企业是否能够完成这种重新匹配。与无摩擦 network rewiring 不同，本文强调 constrained firms may know where greener suppliers are, but cannot afford to connect to them.

---

## 9. 原有实证如何重新定位

原 Paris + 债券期限结构方案中的许多设计仍然有价值，但应从“主故事”降级为机制或后果。

| 原设计 | 新定位 |
| --- | --- |
| Paris DID | 可作为离散事件稳健性，而不是主识别 |
| FactSet + Trucost SCF | 验证文本行动是否对应真实供应链碳下降 |
| KMNT 关系断裂复现 | network 机制证据：受限企业是否切不动高碳供应商 |
| 运营成本渠道 | 经济后果：调不动是否带来成本压力 |
| 债券利差 | 金融市场后果：市场是否惩罚调整能力不足 |
| 期限结构驼峰 | 可作为 appendix 或第二篇文章的金融定价扩展 |
| Merton 分解 | 机制补充，而非主线 |
| CBAM / IRA | 外部验证和反向冲击 |

这样处理后，论文结构更清楚：

1. KLLZ 层识别绿色转型压力从生产网络传到谁；
2. Almeida 层识别供应商融资关系为什么让 rewiring 有金融摩擦；
3. LLM 层识别企业是否只是 talk，还是转化为 action；
4. 供应商网络数据验证文本是否对应真实 rewiring；
5. 运营与信用市场结果说明经济重要性。

---

## 10. 主要假说

### H1：环境政策不确定性提高 network-brown firms 的绿色供应链关注度

当环境政策不确定性上升时，网络碳暴露较高的企业更频繁地在 earnings calls 中讨论绿色供应链、Scope 3、供应商减排和低碳采购。

### H2：供应商融资依赖削弱绿色供应链行动

在环境政策不确定性上升后，依赖 payables、trade credit 或 working capital 的 network-brown firms，其 `GreenSupplyChainAction` 和 `CredibleGreenAction` 反应弱于融资摩擦较低的 network-brown firms。

### H3：融资摩擦扩大 talk-action gap

融资受限企业可能同样意识到绿色供应链风险，但更难执行，因此 `TalkActionGap` 在 EPU 冲击后扩大，尤其是在 network-brown firms 中。

### H4：文本行动对应真实 network rewiring 和供应链碳下降

绿色供应链行动文本指标较高的企业，后续更可能新增低碳供应商、切断高碳供应商关系，并实现真实供应链碳足迹下降。

### H5：金融约束削弱企业利用绿色供应商机会集的能力

当企业附近存在更多可接入的绿色供应商时，财务不受限企业更可能新增绿色供应商关系；财务受限企业对同样机会集的反应更弱。

### H6：supplier financing lock-in 放大金融约束效应

在 payables 依赖高、供应商集中度高、关系久、替代供应商少的企业中，融资摩擦对绿色供应链行动和真实 rewiring 的抑制作用更强。

### H7：无法调整供应链的企业承担经济后果

在 EPU 上升后，network-brown 且供应商融资依赖高的企业运营成本上升、利润率下降，并可能面临更高信用利差。

---

## 11. 最小可行实证版本

为了避免项目再次过重，第一阶段应集中做五张表和两张图。

### Table 1：LLM 文本指标验证

展示绿色供应链文本分类的准确性、人工标注一致性、典型句子和行业分布。

### Table 2：主 LP 结果

`EPUShock x NetworkPressure x SupplierFinancing` 对 `Talk`、`Action`、`CredibleAction`、`TalkActionGap` 的动态影响。

### Table 3：Direct-brown vs network-brown horse race

同时加入自身碳暴露 γ 和网络碳暴露 χ，检验 EPU 冲击下绿色供应链反应主要来自 direct-brown firms 还是 network-brown firms。

### Table 4：Network rewiring 验证

用 FactSet Revere 检验文本行动是否预测后续新增低碳供应商、切断高碳供应商，以及 supplier-financing-dependent firms 是否更难完成 rewiring。

### Table 5：Supplier financing lock-in

检验 `Payables/COGS`、`WorkingCapitalNeed`、`GreenSupplierAvailability` 和 `NetworkLockIn` 是否调节 EPU 冲击下的 rewiring 反应。

### Figure 1：Local projection 动态图

分别画 `Talk`、`Action`、`TalkActionGap` 的 `beta_h` 路径。

### Figure 2：机制图

展示 EPU shock -> network pressure -> supplier financing friction -> talk/action divergence -> network rewiring -> real SCF adjustment。

如果这五张表和两张图成立，项目主干就成立。债券、Merton、CBAM/IRA 可以在第二阶段再加。

---

## 12. 主要风险与应对

### 风险 1：文本指标可能只是 cheap talk

应对：区分 talk、plan、action、credible action，并用真实 SCF 和供应商关系变化验证。

### 风险 2：受限企业可能更少开会或披露更少

应对：控制 transcript length、analyst questions、firm attention、earnings call participation；也可以使用句子占比而不是原始次数。

### 风险 3：EPU 是宏观冲击，难以识别公司层差异

应对：核心识别来自 `EPUShock x NetworkPressure x SupplierFinancing` 的横截面异质性，并加入 firm FE 与 industry x time FE。进一步使用 γ vs χ、upstream vs downstream pressure 的 horse race，显示效应集中在理论上最需要供应链调整的 network-brown firms。

### 风险 4：网络机会集可能不是外生的

应对：使用 pre-determined 的绿色机会集，例如基于冲击前供应商网络、同行供应商池或地区/行业供应商结构；控制 firm FE 与 industry x time FE；重点解释为“企业能否利用既有机会集”的异质性，而不是绿色供应商供给本身的因果效应。

### 风险 5：供应商融资依赖可能内生

应对：使用 pre-determined payables / COGS、样本前期 supplier financing dependence、行业历史 payables 分位数；同时报告一般金融约束（SA/WW/cash）与供应商融资依赖的分离结果。关键解释不是“payables 随冲击变化”，而是“事前依赖供应商融资的企业更难切换供应商”。

### 风险 6：LLM 分类可复现性

应对：保留 prompt、模型版本、temperature、人工标注样本和 confusion matrix；主结果使用可复现的 sentence-level 分类流程。

---

## 13. 暂定标题

较直接版本：

> Production Networks, Supplier Financing, and Green Supply Chain Rewiring

更有 punch 的版本：

> Can Firms Afford to Green Their Supply Chains?

偏文本创新版本：

> From Talk to Rewiring: Financing Green Supply Chain Adaptation

偏机制版本：

> Supplier Financing and the Limits of Green Supply Chain Rewiring

---

## 14. 摘要草稿

We study how production networks and supplier financing shape firms' green supply-chain responses to environmental policy uncertainty. Building on the idea that carbon risk is transmitted through production networks, we distinguish firms' direct carbon exposure from network-based transition pressure. Using earnings-call transcripts and large language models, we construct firm-quarter measures of green supply-chain discussion, action, and credible implementation. We find that increases in environmental policy uncertainty make network-brown firms more likely to discuss green supply-chain strategies, but firms that rely heavily on supplier financing are significantly less likely to translate such discussion into concrete actions. This creates a widening gap between green supply-chain talk and action among firms facing high network pressure and high financing frictions. Using firm-to-firm supplier data, we show that text-based green supply-chain actions predict subsequent network rewiring: firms add greener suppliers, exit browner supplier relationships, and reduce supply-chain carbon exposure. These real adjustments are muted among firms dependent on payables and working capital financing, especially when supplier networks are concentrated or alternative green suppliers are scarce. The evidence suggests that green supply-chain adaptation is not only a matter of environmental exposure or managerial attention, but also of financial capacity to reorganize production networks.

中文摘要：

本文研究生产网络和供应商融资关系如何影响企业在环境政策不确定性上升时的绿色供应链调整。借鉴碳风险通过生产网络传导的思想，我们区分企业自身直接碳暴露和网络传导来的绿色转型压力。我们使用 earnings call transcripts 和大语言模型，构造公司季度层面的绿色供应链讨论、行动和可信执行指标。结果显示，环境政策不确定性上升后，network-brown firms 更频繁讨论绿色供应链策略，但高度依赖供应商融资的企业更难将讨论转化为具体行动，从而形成更大的“talk-action gap”。进一步使用 firm-to-firm 供应商数据，我们检验文本行动是否对应真实 network rewiring：新增低碳供应商、退出高碳供应商关系、降低供应链碳足迹。结果表明，绿色供应链转型不仅取决于环境风险暴露和管理层关注，也取决于企业是否有足够融资能力来重组生产网络。

---

## 15. 下一步执行清单

1. 确定 earnings call 数据源和样本窗口。
2. 设计绿色供应链文本 taxonomy：talk、plan、action、credible action。
3. 抽样 500-1000 条句子人工标注，建立验证集。
4. 写 LLM prompt，输出 sentence-level JSON 分类。
5. 构造 firm-quarter 文本指标。
6. 确定主 EPU/CPU 指数，转换为月度或季度 shock。
7. 构造 γ / χ、`UpstreamBrownPressure`、`DownstreamGreenPressure` 等 network pressure 变量。
8. 构造 `Payables/COGS`、`WorkingCapitalNeed`、SA/WW/cash 等 supplier financing 和金融约束指标。
9. 构造 network rewiring 变量：`GreenSupplierAvailability`、`GreenRewiring`、`BrownLinkExit`、`NetworkLockIn`。
10. 先跑主 LP：`EPUShock x NetworkPressure x SupplierFinancing -> Talk/Action/Gap`。
11. 再匹配 FactSet Revere + Trucost 验证真实供应链 rewiring 和 SCF 变化。
12. 最后决定是否加入债券利差、运营表现和外部验证。
