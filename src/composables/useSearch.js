import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

export function useSearch() {
  const { t, locale } = useI18n()
  const searchQuery = ref('')
  const isSearchOpen = ref(false)
  const searchResults = ref([])
  const isLoading = ref(false)

  // Dữ liệu tìm kiếm - có thể mở rộng từ API hoặc store
  const searchableData = computed(() => {
    const currentLocale = locale.value
    
    return [
      // Events/Programs
      {
        id: 'event-1',
        type: 'event',
        title: t('activities.highlights.0'),
        description: t('activities.description'),
        section: 'program',
        keywords: ['hội thảo', 'phụ sản', 'workshop', 'obstetrics', 'gynecology']
      },
      {
        id: 'event-2',
        type: 'event',
        title: t('activities.highlights.1'),
        description: t('activities.description'),
        section: 'program',
        keywords: ['triển lãm', 'công nghệ', 'y tế', 'exhibition', 'medical', 'technology']
      },
      {
        id: 'event-3',
        type: 'event',
        title: t('activities.highlights.2'),
        description: t('activities.description'),
        section: 'program',
        keywords: ['giao lưu', 'chuyên gia', 'quốc tế', 'networking', 'experts', 'international']
      },
      {
        id: 'event-4',
        type: 'event',
        title: t('activities.highlights.3'),
        description: t('activities.description'),
        section: 'program',
        keywords: ['chứng nhận', 'tham dự', 'hội nghị', 'certification', 'attendance', 'conference']
      },
      
      // Services
      {
        id: 'service-1',
        type: 'service',
        title: t('programs.halalIndonesia'),
        description: t('programs.indonesiaMarketDesc'),
        section: 'programs',
        keywords: ['halal', 'indonesia', 'quy định', 'regulations']
      },
      {
        id: 'service-2',
        type: 'service',
        title: t('programs.halalCertification'),
        description: t('programs.indonesiaMarketDesc'),
        section: 'programs',
        keywords: ['chứng nhận', 'halal', 'certification', 'indonesia']
      },
      {
        id: 'service-3',
        type: 'service',
        title: t('programs.indonesiaMarket'),
        description: t('programs.indonesiaMarketDesc'),
        section: 'programs',
        keywords: ['thị trường', 'indonesia', 'tiềm năng', 'market', 'potential']
      },
      {
        id: 'service-4',
        type: 'service',
        title: t('programs.vietnamBusiness'),
        description: t('programs.indonesiaMarketDesc'),
        section: 'programs',
        keywords: ['doanh nghiệp', 'việt nam', 'indonesia', 'business', 'vietnam']
      },
      {
        id: 'service-5',
        type: 'service',
        title: t('programs.exportOpportunity'),
        description: t('programs.indonesiaMarketDesc'),
        section: 'programs',
        keywords: ['xuất khẩu', 'cơ hội', 'thị trường', 'export', 'opportunity', 'market']
      },
      {
        id: 'service-6',
        type: 'service',
        title: t('programs.agricultureMarket'),
        description: t('programs.indonesiaMarketDesc'),
        section: 'programs',
        keywords: ['nông sản', 'thị trường', 'indonesia', 'agriculture', 'market']
      },
      
      // Accommodation
      {
        id: 'accommodation-1',
        type: 'accommodation',
        title: t('accommodation.policy_1'),
        description: t('accommodation.description'),
        section: 'accommodation',
        keywords: ['chính sách', 'ưu đãi', 'đầu tư', 'policy', 'incentive', 'investment']
      },
      {
        id: 'accommodation-2',
        type: 'accommodation',
        title: t('accommodation.policy_2'),
        description: t('accommodation.description'),
        section: 'accommodation',
        keywords: ['chính sách', 'fdi', 'doanh nghiệp', 'policy', 'enterprises']
      },
      {
        id: 'accommodation-3',
        type: 'accommodation',
        title: t('accommodation.procedure_1'),
        description: t('accommodation.description'),
        section: 'accommodation',
        keywords: ['thủ tục', 'đầu tư', 'đặc biệt', 'procedure', 'investment', 'special']
      },
      {
        id: 'accommodation-4',
        type: 'accommodation',
        title: t('accommodation.procedure_2'),
        description: t('accommodation.description'),
        section: 'accommodation',
        keywords: ['thủ tục', 'đầu tư', 'đặc biệt', 'procedure', 'investment', 'special']
      },
      {
        id: 'accommodation-5',
        type: 'accommodation',
        title: t('accommodation.news_1'),
        description: t('accommodation.description'),
        section: 'accommodation',
        keywords: ['đầu tư', 'trực tiếp', 'nước ngoài', 'investment', 'direct', 'foreign']
      },
      {
        id: 'accommodation-6',
        type: 'accommodation',
        title: t('accommodation.news_2'),
        description: t('accommodation.description'),
        section: 'accommodation',
        keywords: ['fdi', 'việt nam', 'tỷ usd', 'vietnam', 'billion']
      },
      
      // Activities
      {
        id: 'activity-1',
        type: 'activity',
        title: t('activities.activities.0'),
        description: t('activities.description'),
        section: 'activities',
        keywords: ['tham quan', 'thành phố', 'city', 'tour']
      },
      {
        id: 'activity-2',
        type: 'activity',
        title: t('activities.activities.1'),
        description: t('activities.description'),
        section: 'activities',
        keywords: ['ẩm thực', 'địa phương', 'cuisine', 'local']
      },
      {
        id: 'activity-3',
        type: 'activity',
        title: t('activities.activities.2'),
        description: t('activities.description'),
        section: 'activities',
        keywords: ['giao lưu', 'văn hóa', 'cultural', 'exchange']
      },
      {
        id: 'activity-4',
        type: 'activity',
        title: t('activities.activities.3'),
        description: t('activities.description'),
        section: 'activities',
        keywords: ['di tích', 'lịch sử', 'historical', 'sites']
      },
      
      // General info
      {
        id: 'intro-1',
        type: 'info',
        title: t('intro.title'),
        description: t('intro.content'),
        section: 'intro',
        keywords: ['giới thiệu', 'hội nghị', 'khoa học', 'quốc tế', 'introduction', 'conference', 'scientific', 'international']
      },
      {
        id: 'partners-1',
        type: 'info',
        title: t('partners.title'),
        description: t('partners.description'),
        section: 'partners',
        keywords: ['đối tác', 'liên hệ', 'hợp tác', 'partners', 'contact', 'cooperation']
      },
      
      // Footer - Contact Information
      {
        id: 'footer-contact-1',
        type: 'contact',
        title: t('footer.contactTitle'),
        description: `${t('footer.contactOrg')} - ${t('footer.contactAddress')}`,
        section: 'footer',
        keywords: ['thông tin liên hệ', 'hội phụ sản', 'việt nam', 'văn phòng', 'miền trung', 'contact information', 'obstetrics', 'vietnam', 'office', 'central']
      },
      {
        id: 'footer-contact-2',
        type: 'contact',
        title: t('footer.contactPhone'),
        description: 'Điện thoại liên hệ chính',
        section: 'footer',
        keywords: ['điện thoại', 'số điện thoại', 'phone', 'contact', '0989 228 779']
      },
      {
        id: 'footer-contact-3',
        type: 'contact',
        title: 'vago.mientrung@gmail.com',
        description: 'Email liên hệ chính',
        section: 'footer',
        keywords: ['email', 'gmail', 'vago', 'mientrung', 'contact email']
      },
      
      // Footer - Coordinator Information
      {
        id: 'footer-coordinator-1',
        type: 'contact',
        title: t('footer.coordinatorTitle'),
        description: `${t('footer.coordinatorName')} - ${t('footer.coordinatorPhone')}`,
        section: 'footer',
        keywords: ['điều phối', 'chung hội nghị', 'pgs.ts', 'lê minh tâm', 'coordinator', 'conference', 'assoc prof', 'le minh tam']
      },
      {
        id: 'footer-coordinator-2',
        type: 'contact',
        title: 'leminhtam.med@gmail.com',
        description: 'Email điều phối viên',
        section: 'footer',
        keywords: ['email', 'điều phối', 'coordinator', 'leminhtam', 'med']
      },
      
      // Footer - Secretary Information
      {
        id: 'footer-secretary-1',
        type: 'contact',
        title: t('footer.secretaryTitle'),
        description: `${t('footer.secretaryName')} - 0903 522 510`,
        section: 'footer',
        keywords: ['thư ký', 'hội nghị', 'ths.bs', 'võ văn khoa', 'secretary', 'conference', 'masters', 'vo van khoa']
      },
      {
        id: 'footer-secretary-2',
        type: 'contact',
        title: 'vovankhoa@huemed-univ.edu.vn',
        description: 'Email thư ký hội nghị',
        section: 'footer',
        keywords: ['email', 'thư ký', 'secretary', 'vovankhoa', 'huemed', 'univ']
      },
      
      // Footer - Registration Form
      {
        id: 'footer-register-1',
        type: 'form',
        title: t('footer.registerTitle'),
        description: 'Đăng ký thông tin liên hệ để nhận thông tin mới nhất về hội nghị',
        section: 'footer',
        keywords: ['đăng ký', 'thông tin liên hệ', 'form', 'register', 'contact information', 'form']
      },
      {
        id: 'footer-register-2',
        type: 'form',
        title: t('footer.name'),
        description: 'Trường thông tin họ tên trong form đăng ký',
        section: 'footer',
        keywords: ['họ tên', 'tên', 'name', 'full name', 'quý danh']
      },
      {
        id: 'footer-register-3',
        type: 'form',
        title: t('footer.email'),
        description: 'Trường thông tin email trong form đăng ký',
        section: 'footer',
        keywords: ['email', 'thư điện tử', 'email address']
      },
      {
        id: 'footer-register-4',
        type: 'form',
        title: t('footer.phone'),
        description: 'Trường thông tin điện thoại trong form đăng ký',
        section: 'footer',
        keywords: ['điện thoại', 'số điện thoại', 'phone', 'phone number', 'sđt']
      },
      {
        id: 'footer-register-5',
        type: 'form',
        title: t('footer.content'),
        description: 'Trường nội dung trong form đăng ký',
        section: 'footer',
        keywords: ['nội dung', 'content', 'message']
      },
      {
        id: 'footer-register-6',
        type: 'form',
        title: t('footer.details'),
        description: 'Trường chi tiết trong form đăng ký',
        section: 'footer',
        keywords: ['chi tiết', 'details', 'additional information']
      },
      {
        id: 'footer-register-7',
        type: 'form',
        title: t('footer.sendInfo'),
        description: 'Nút gửi thông tin đăng ký',
        section: 'footer',
        keywords: ['gửi thông tin', 'submit', 'send information', 'gửi']
      }
    ]
  })

  // Hàm tìm kiếm
  const performSearch = (query) => {
    if (!query.trim()) {
      searchResults.value = []
      return
    }

    isLoading.value = true
    
    // Simulate API delay
    setTimeout(() => {
      const normalizedQuery = query.toLowerCase().trim()
      const results = searchableData.value.filter(item => {
        // Tìm kiếm trong title, description và keywords
        const searchableText = [
          item.title.toLowerCase(),
          item.description.toLowerCase(),
          ...item.keywords.map(k => k.toLowerCase())
        ].join(' ')
        
        return searchableText.includes(normalizedQuery)
      })
      
      searchResults.value = results.slice(0, 8) // Giới hạn 8 kết quả
      isLoading.value = false
    }, 300)
  }

  // Hàm xử lý input tìm kiếm
  const handleSearchInput = (event) => {
    const query = event.target.value
    searchQuery.value = query
    performSearch(query)
  }

  // Hàm mở/đóng dropdown tìm kiếm
  const toggleSearch = () => {
    isSearchOpen.value = !isSearchOpen.value
    if (!isSearchOpen.value) {
      searchQuery.value = ''
      searchResults.value = []
    }
  }

  // Hàm chọn kết quả tìm kiếm
  const selectSearchResult = (result) => {
    // Scroll đến section tương ứng
    const sectionElement = document.getElementById(result.section)
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' })
    } else {
      // Fallback: scroll xuống cuối trang nếu không tìm thấy section
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
    }
    
    // Đóng dropdown và reset
    isSearchOpen.value = false
    searchQuery.value = ''
    searchResults.value = []
  }

  // Hàm đóng dropdown khi click outside
  const closeSearch = () => {
    isSearchOpen.value = false
    searchQuery.value = ''
    searchResults.value = []
  }

  return {
    searchQuery,
    isSearchOpen,
    searchResults,
    isLoading,
    handleSearchInput,
    toggleSearch,
    selectSearchResult,
    closeSearch
  }
} 