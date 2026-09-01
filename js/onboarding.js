/* ===================== Onboarding ===================== */

function maybeShowOnboarding() {

  if (STATE.onboarded) return;

  const overlay =
    el("div", {
      class: "modal-overlay"
    });

  let currentStep = 1;
  let selectedLevel = null;

  const input =
    el("input", {
      class: "text-input",
      type: "text",
      placeholder: "e.g. 건호 or Keonho"
    });

  const content =
    el("div", {
      class: "onboarding-content"
    });


  /* =====================================================
     STEP RENDERER
     ===================================================== */

  function renderStep() {

    content.innerHTML = "";


    /* =========================
       STEP 1 — NAME
       ========================= */

    if (currentStep === 1) {

      content.append(

        el(
          "div",
          { class: "onboarding-mark" },
          "한"
        ),

        el(
          "h2",
          {},
          "환영합니다! Welcome to 한국OH!"
        ),

        el(
          "p",
          { class: "muted" },
          "What should we call you on your Korean learning journey?"
        ),

        input,

        el(
          "button",
          {
            class: "btn btn-primary btn-block",
            onclick: () => {

              const name =
                input.value.trim();

              if (!name) {

                toast(
                  "Please enter your name first",
                  "info"
                );

                return;
              }

              setUserName(name);

              currentStep = 2;

              renderStep();
            }
          },
          "Continue"
        )

      );

      return;
    }


    /* =========================
       STEP 2 — EXPERIENCE
       ========================= */

    if (currentStep === 2) {

      content.append(

        el(
          "div",
          { class: "onboarding-mark" },
          "한국"
        ),

        el(
          "h2",
          {},
          "How much Korean do you know?"
        ),

        el(
          "p",
          { class: "muted onboarding-description" },
          "Choose the option that best describes your current Korean level."
        )

      );


      const choices = [

        {
          level: "foundation",
          icon: "🌱",
          title: "I'm completely new to Korean",
          description:
            "I know little to nothing about Korean."
        },

        {
          level: "beginner",
          icon: "🌿",
          title: "I know the basics",
          description:
            "I can read Hangul and understand some simple Korean."
        },

        {
          level: "intermediate",
          icon: "🌳",
          title: "I can communicate a little",
          description:
            "I can make basic sentences and understand everyday Korean."
        },

        {
          level: "topik",
          icon: "🚀",
          title: "I'm already comfortable with Korean",
          description:
            "I understand intermediate Korean and want to challenge myself with TOPIK."
        }

      ];


      const choiceWrap =
        el("div", {
          class: "onboarding-options"
        });


      choices.forEach((choice) => {

        const btn =
          el(
            "button",
            {
              class: "onboarding-option",

              onclick: () => {

                selectedLevel =
                  choice.level;

                choiceWrap
                  .querySelectorAll(
                    ".onboarding-option"
                  )
                  .forEach((b) => {

                    b.classList.remove(
                      "selected"
                    );

                  });

                btn.classList.add(
                  "selected"
                );

                nextBtn.disabled =
                  false;
              }
            },

            [

              el(
                "span",
                {
                  class: "onboarding-option-icon"
                },
                choice.icon
              ),

              el(
                "span",
                {
                  class: "onboarding-option-content"
                },
                [

                  el(
                    "strong",
                    {
                      class:
                        "onboarding-option-title"
                    },
                    choice.title
                  ),

                  el(
                    "span",
                    {
                      class:
                        "onboarding-option-description"
                    },
                    choice.description
                  )

                ]
              ),

              el(
                "span",
                {
                  class:
                    "onboarding-option-check"
                },
                "✓"
              )

            ]
          );

        choiceWrap.appendChild(btn);

      });


      const nextBtn =
        el(
          "button",
          {
            class:
              "btn btn-primary btn-block",

            disabled: true,

            onclick: () => {

              if (!selectedLevel) {

                toast(
                  "Choose your Korean level first",
                  "info"
                );

                return;
              }

              currentStep = 3;

              renderStep();
            }
          },
          "Continue"
        );


      content.append(
        choiceWrap,
        nextBtn
      );

      return;
    }


    /* =========================
       STEP 3 — SELF CHECK
       ========================= */

    if (currentStep === 3) {

      content.append(

        el(
          "div",
          { class: "onboarding-mark" },
          "한"
        ),

        el(
          "h2",
          {},
          "Let's make sure we start you in the right place."
        ),

        el(
          "p",
          {
            class:
              "muted onboarding-description"
          },
          "Which sentence feels closest to what you can already understand?"
        )

      );


      const choices = [

        {
          level: "foundation",
          text: "저는 학생이에요.",
          description:
            "I can recognize very basic Korean sentences."
        },

        {
          level: "beginner",
          text: "저는 매일 학교에 가요.",
          description:
            "I can understand simple everyday sentences."
        },

        {
          level: "intermediate",
          text:
            "시간이 없어서 친구를 만나지 못했어요.",
          description:
            "I can understand longer sentences and connecting grammar."
        },

        {
          level: "topik",
          text:
            "사회가 변화함에 따라 사람들의 생활 방식도 달라지고 있다.",
          description:
            "I can understand more advanced written Korean."
        }

      ];


      const choiceWrap =
        el(
          "div",
          {
            class:
              "onboarding-options self-check-options"
          }
        );


      let abilityLevel = null;


      choices.forEach((choice) => {

        const btn =
          el(
            "button",
            {
              class:
                "onboarding-option onboarding-sentence-option",

              onclick: () => {

                abilityLevel =
                  choice.level;

                choiceWrap
                  .querySelectorAll(
                    ".onboarding-option"
                  )
                  .forEach((b) => {

                    b.classList.remove(
                      "selected"
                    );

                  });

                btn.classList.add(
                  "selected"
                );

                startBtn.disabled =
                  false;
              }
            },

            [

              el(
                "span",
                {
                  class:
                    "onboarding-sentence"
                },
                choice.text
              ),

              el(
                "span",
                {
                  class:
                    "onboarding-option-description"
                },
                choice.description
              ),

              el(
                "span",
                {
                  class:
                    "onboarding-option-check"
                },
                "✓"
              )

            ]
          );

        choiceWrap.appendChild(btn);

      });


      const startBtn =
        el(
          "button",
          {
            class:
              "btn btn-primary btn-block",

            disabled: true,

            onclick: () => {

              if (!abilityLevel) {

                toast(
                  "Choose the sentence that feels closest to you",
                  "info"
                );

                return;
              }

              finishOnboarding(
                abilityLevel
              );
            }
          },
          "Find My Starting Level"
        );


      content.append(
        choiceWrap,
        startBtn
      );

      return;
    }


    /* =========================
       STEP 4 — RESULT
       ========================= */

    if (currentStep === 4) {

      const result =
        getStartingLevelInfo(
          selectedLevel
        );


      content.append(

        el(
          "div",
          { class: "onboarding-mark" },
          "한"
        ),

        el(
          "h2",
          {},
          `Welcome, ${STATE.name}! 🎉`
        ),

        el(
          "h3",
          {
            class:
              "onboarding-result-title"
          },
          result.title
        ),

        el(
          "p",
          {
            class:
              "muted onboarding-result-description"
          },
          result.description
        ),

        el(
          "div",
          {
            class:
              "onboarding-result-note"
          },
          [
            el(
              "span",
              {},
              "✓"
            ),
            el(
              "span",
              {},
              "Your lessons will unlock sequentially from this point."
            )
          ]
        ),

        el(
          "button",
          {
            class:
              "btn btn-primary btn-block",

            onclick: () => {

              STATE.onboarded =
                true;

              saveState();

              overlay.remove();

              render();
            }
          },
          "Start Learning"
        )

      );

    }

  }


  /* =====================================================
     DETERMINE STARTING LEVEL
     ===================================================== */

  function finishOnboarding(
    abilityLevel
  ) {

    const order = {

      foundation: 0,
      beginner: 1,
      intermediate: 2,
      topik: 3

    };


    /*
     * Never place the learner above
     * what they demonstrated.
     */
    const finalLevel =
      order[abilityLevel] <
      order[selectedLevel]
        ? abilityLevel
        : selectedLevel;


    selectedLevel =
      finalLevel;


    const lessonMap = {

      foundation: "l1",
      beginner: "l26",
      intermediate: "l51",
      topik: "l76"

    };


    STATE.startingLevel =
      finalLevel;

    STATE.startingLesson =
      lessonMap[finalLevel];


    saveState();


    currentStep = 4;

    renderStep();
  }


  /* =====================================================
     STARTING LEVEL INFORMATION
     ===================================================== */

  function getStartingLevelInfo(level) {

    const info = {

      foundation: {

        title:
          "🌱 Foundation",

        description:
          "We'll start with Hangul, pronunciation, essential vocabulary, and the fundamentals of Korean."

      },

      beginner: {

        title:
          "🌿 Beginner",

        description:
          "We'll start with particles, verb conjugations, daily activities, time and dates, and places and destinations."

      },

      intermediate: {

        title:
          "🌳 Intermediate",

        description:
          "We'll start with intermediate grammar, formal speech, connecting sentences, reading, and listening practice."

      },

      topik: {

        title:
          "🚀 TOPIK Preparation",

        description:
          "We'll start with TOPIK-focused vocabulary, reading, listening, writing, and mock questions."

      }

    };


    return (
      info[level] ||
      info.foundation
    );
  }


  /* =====================================================
     MODAL
     ===================================================== */

  overlay.appendChild(

    el(
      "div",
      {
        class:
          "modal-card onboarding-card"
      },
      [
        content
      ]
    )

  );


  document.body.appendChild(
    overlay
  );


  renderStep();
}


/* =====================
   INITIALIZE
   ===================== */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    setTimeout(
      maybeShowOnboarding,
      50
    );

  }
);
