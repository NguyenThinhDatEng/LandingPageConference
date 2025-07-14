<template>
  <SectionContainer :title="$t('program.title')" section-id="programs">
    <div class="programs-content flex flex-col gap-4 md:gap-8 w-full">
      <!-- Bảng ngày thứ nhất -->
      <div class="overflow-x-auto">
        <div class="font-bold text-xl text-gray-700 mb-1">
          {{ $t("program.day1") }}
        </div>
        <table class="min-w-full rounded-lg">
          <thead>
            <tr class="bg-white">
              <th
                class="py-2 px-4 text-left italic font-medium text-gray-700 border-b border-blue text-blue w-32 md:w-64"
              >
                {{ $t("program.time") }}
              </th>
              <th
                class="py-2 px-4 text-left italic font-medium text-gray-700 border-b border-blue text-blue"
              >
                {{ $t("program.program") }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b border-blue">
              <td class="py-2 px-4 align-top time-cell w-32 md:w-64">
                07:00 - 17:00
              </td>
              <td class="py-2 px-4 align-top font-bold text-blue-900"></td>
            </tr>
            <tr class="border-b border-blue">
              <td class="py-2 px-4 align-top time-cell w-32 md:w-64">
                17:30 - 19:00
              </td>
              <td class="py-2 px-4 align-top font-bold text-blue-900"></td>
            </tr>
            <tr>
              <td class="py-2 px-4 align-top time-cell w-32 md:w-64">
                19:30 - 21:30
              </td>
              <td class="py-2 px-4 align-top font-bold text-blue-900"></td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Bảng ngày thứ hai -->
      <div class="overflow-x-auto">
        <div class="font-bold text-xl text-gray-700 mb-1">
          {{ $t("program.day2") }}
        </div>
        <div class="italic text-gray-700 mb-2">
          {{ $t("program.location") }}
        </div>
        <table class="min-w-full rounded-lg">
          <thead>
            <tr class="bg-white">
              <th
                class="py-2 px-4 text-left italic font-medium text-gray-700 border-b border-blue text-blue w-32 md:w-64"
              >
                {{ $t("program.time") }}
              </th>
              <th
                class="py-2 px-4 text-left italic font-medium text-gray-700 border-b border-blue text-blue"
              >
                {{ $t("program.content") }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b border-blue">
              <td class="py-2 px-4 align-top time-cell w-32 md:w-64">
                08:00 - 10:00
              </td>
              <td class="py-2 px-4 align-top font-bold text-blue-900"></td>
            </tr>
            <tr class="border-b border-blue">
              <td
                class="py-2 px-4 align-top time-cell w-32 md:w-64"
                rowspan="3"
              >
                10:00 - 11:30
              </td>
              <td class="py-2 px-4 align-top font-bold text-blue-900">
                {{ $t("program.session_1A") }}
              </td>
            </tr>
            <tr class="border-b border-blue">
              <td class="hidden"></td>
              <td class="py-2 px-4 align-top font-bold text-blue-900">
                {{ $t("program.session_1B") }}
              </td>
            </tr>
            <tr class="border-b border-blue">
              <td class="hidden"></td>
              <td class="py-2 px-4 align-top font-bold text-blue-900">
                {{ $t("program.session_1C") }}
              </td>
            </tr>
            <tr class="border-b border-blue">
              <td class="py-2 px-4 align-top time-cell w-32 md:w-64">
                11:30 - 13:30
              </td>
              <td class="py-2 px-4 align-top"></td>
            </tr>
            <tr class="border-b border-blue">
              <td
                class="py-2 px-4 align-top time-cell w-32 md:w-64"
                rowspan="3"
              >
                13:30 - 15:00
              </td>
              <td class="py-2 px-4 align-top font-bold text-blue-900">
                {{ $t("program.session_2A") }}
              </td>
            </tr>
            <tr class="border-b border-blue">
              <td class="hidden"></td>
              <td class="py-2 px-4 align-top font-bold text-blue-900">
                {{ $t("program.session_2B") }}
              </td>
            </tr>
            <tr class="border-b border-blue">
              <td class="hidden"></td>
              <td class="py-2 px-4 align-top font-bold text-blue-900">
                {{ $t("program.session_2C") }}
              </td>
            </tr>
            <tr class="border-b border-blue">
              <td class="py-2 px-4 align-top time-cell w-32 md:w-64">
                15:00 - 15:30
              </td>
              <td class="py-2 px-4 align-top"></td>
            </tr>
            <tr class="border-b border-blue">
              <td
                class="py-2 px-4 align-top time-cell w-32 md:w-64"
                rowspan="2"
              >
                15:30 - 17:00
              </td>
              <td class="py-2 px-4 align-top font-bold text-blue-900">
                {{ $t("program.session_7C") }}
              </td>
            </tr>
            <tr>
              <td class="hidden"></td>
              <td class="py-2 px-4 align-top font-bold text-blue-900">
                {{ $t("program.session_8C") }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </SectionContainer>
</template>

<script>
import SectionContainer from "@/components/SectionContainer.vue";
export default {
  name: "ProgramSection",
  components: { SectionContainer },
};
</script>

<style lang="scss">
.container-content {
  width: 100%;

  .programs-content {
    /* Optional: Add a subtle green border radius for the table wrapper */
    div.overflow-x-auto {
      border: 2px solid #8bc34a;
      border-radius: 12px;
      padding: 8px;
    }

    .time-cell {
      color: #2d286c !important;
    }

    .text-blue {
      color: #2d286c;
    }

    .border-blue {
      border-color: #02408b;
    }
  }
}
</style>
